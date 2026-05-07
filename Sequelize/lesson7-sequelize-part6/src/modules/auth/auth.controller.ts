import { Request, Response } from "express";
import { Users, validateUser } from "./user/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const generateAccessToken = (id: number, role: string) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET as string, {
    expiresIn: "15m",
  });
};

const generateRefreshToken = (id: number, role: string) => {
  return jwt.sign({ id, role }, process.env.JWT_REFRESH_SECRET as string, {
    expiresIn: "7d",
  });
};

export const register = async (req: Request, res: Response) => {
  try {
    const { error } = validateUser(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const existUser = await Users.findOne({ where: { email: req.body.email } });
    if (existUser) {
      return res.status(400).json({ message: "Bu email artıq mövcuddur" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await Users.create({ ...req.body, password: hashedPassword });

    res.status(201).json({ message: "Qeydiyyat uğurlu oldu", data: user });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const user = await Users.findOne({ where: { email: req.body.email } });
    if (!user) {
      return res.status(404).json({ message: "İstifadəçi tapılmadı" });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Şifrə yanlışdır" });
    }

    const accessToken = generateAccessToken(user.id, user.role);
    const refreshToken = generateRefreshToken(user.id, user.role);

    console.log("BEFORE UPDATE:", user.id, refreshToken);
    await user.update({ refreshToken });
    console.log("AFTER UPDATE");

    res.status(200).json({ accessToken, refreshToken });
  } catch (error) {
    console.error("LOGIN ERROR:", error); // ← bunu əlavə et
    res.status(500).json({ message: "Something went wrong", error });
  }
};

export const refreshAccessToken = async (req: Request, res: Response) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return res.status(401).json({ message: "Refresh token yoxdur" });
    }

    const decoded = jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET as string
    ) as { id: number; role: string };

    const user = await Users.findOne({ where: { id: decoded.id, refreshToken } });
    if (!user) {
      return res.status(401).json({ message: "Refresh token etibarsızdır" });
    }

    const accessToken = generateAccessToken(decoded.id, decoded.role);

    res.status(200).json({ accessToken });
  } catch (error) {
    res.status(401).json({ message: "Refresh token etibarsızdır" });
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    const user = await Users.findByPk(req.user?.id);
    if (user) {
      await user.update({ refreshToken: null });
    }
    res.status(200).json({ message: "Çıxış uğurlu oldu" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};