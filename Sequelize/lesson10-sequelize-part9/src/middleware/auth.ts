import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

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

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token =
  req.cookies?.accessToken ||
  req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
    req.user = { id: decoded.id, role: decoded.role };
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token expired" });
  }
};

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user?.role !== "admin") {
    return res.status(403).json({ message: "No permission.You need admin's token" });
  }
  next();
};

export const isUser = (req: Request, res: Response, next: NextFunction) => {
  if (req.user?.role !== "user") {
    return res.status(403).json({ message: "No permission.You need user's token" });
  }
  next();
};