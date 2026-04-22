import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { Users } from "../modules/auth/user/user.model";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        role: "user" | "admin";
      };
    }
  }
}

interface JwtPayload {
  id: number;
  role: "user" | "admin";
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token yoxdur" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

    const user = await Users.findOne({ where: { accessToken: token } });
    if (!user) {
      return res.status(401).json({ message: "Token etibarsızdır" });
    }

    req.user = { id: decoded.id, role: decoded.role };
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token etibarsızdır" });
  }
};

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user?.role !== "admin") {
    return res.status(403).json({ message: "İcazə yoxdur" });
  }
  next();
};

export const isUser = (req: Request, res: Response, next: NextFunction) => {
  if (req.user?.role !== "user") {
    return res.status(403).json({ message: "İcazə yoxdur" });
  }
  next();
};