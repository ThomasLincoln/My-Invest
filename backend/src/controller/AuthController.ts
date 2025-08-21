import { Request, Response, Nect } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { encrypt } from "../helpers/helper";
import { UserResponse, type Payload } from "../dto/User-DTO";

export class AuthController {
  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      console.log("Verificando se o email e senha estão preenchidos")
      if (!email || !password) {
        return res
          .status(500)
          .json({ message: "email and password required" });
      }

      const userRepository = AppDataSource.getRepository(User);
      const user = await userRepository.findOne({ where: { email } });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      console.log("verificando se a senha é válida");
      const isPasswordValid = encrypt.comparePassword(user.password, password);
      if (!isPasswordValid) {
        return res.status(404).json({ message: "Password Invalid" });
      }
      const payload: Payload = {
        id: Number(user.id),
        email: String(user.email),
      }

      const token = encrypt.generateToken(payload);
      const userResponse = new UserResponse;
      userResponse.email = String(user.email);
      userResponse.firstName = String(user.firstName);
      userResponse.lastName = String(user.lastName);
      userResponse.token = token;

      return res.status(200).json({ message: "Login Succesfull", userResponse });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}