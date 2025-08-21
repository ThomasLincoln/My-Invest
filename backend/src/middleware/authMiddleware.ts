import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export const authMiddleware =
  (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401)
        .json({ message: "Acesso negado. Token não fornecido" });
    }

    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET as string);
      req.user = decode;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Token inválido" });
    }
  }