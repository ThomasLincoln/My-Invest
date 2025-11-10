import { Request, Response, Nect } from "express";
import { AppDataSource } from "../data-source";
import { encrypt } from "../helpers/helper";
import { type Payload } from "../dto/User-DTO";
import { User } from "../entity/User";

export class AuthController {
  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      console.log("Verificando se o email e senha estão preenchidos")
      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "email and password required" });
      }

      const userRepository = AppDataSource.getRepository(User);
      const user = await userRepository.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({ message: "Invalid Credentials" });
      }

      console.log("verificando se a senha é válida");
      const isPasswordValid = encrypt.comparePassword(user.password, password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid Credentials" });
      }
      const payload: Payload = {
        id: Number(user.id),
        email: String(user.email),
      }

      const token = encrypt.generateToken(payload);

      res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: 'strict',
        maxAge: 1000 * 60 * 60 * 24 * 7
      });

      const userResponse = {
        email: String(user.email),
        firstName: String(user.firstName),
        lastName: String(user.lastName),
      }

      return res.status(200).json({ message: "Login Succesfull", userResponse });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  static async me(req: Request, res: Response){
    const user = req.user!;

    const userResponse = { 
      email: String(user.email),
      firstName: String(user.firstName),
      lastName: String(user.lastName),
    }
    return res.status(200).json(userResponse);
  }
}