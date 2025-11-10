import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import type { User } from "../entity/User";
import type { Payload } from "../dto/User-DTO";
import { AppDataSource } from "../data-source";
import { userRepository } from "../repository";

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

export const authMiddleware =
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401)
        .json({ message: "Acesso negado. Token não fornecido" });
    }

    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET as string) as Payload;

      if (!payload || !payload.id) {
        return res.status(401).json({ message: "Token inválido" });
      }
      const user = await userRepository.findOne(payload.id);
      if (!user) {
        return res.status(401).json({ message: "Acesso negado. Usuário não encontrado" })
      }

      req.user = user;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Token inválido" });
    }
  }