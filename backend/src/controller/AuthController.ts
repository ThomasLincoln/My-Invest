import { Request, Response, Nect } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { encrypt } from "../helpers/helper";
import { UserResponse } from "../dto/User-DTO";

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

      console.log("verificando se a senha é válida");
      const isPasswordValid = encrypt.comparePassword(user.password, password);
      if (!user || !isPasswordValid) {
        return res.status(404).json({ message: "User not found" });
      }

      const token = encrypt.generateToken({ id: user.id, email: user.email });  
      const userResponse = new UserResponse;
      userResponse.email = user.email;
      userResponse.firstName = user.firstName;
      userResponse.lastName = user.lastName;
      userResponse.token = token;

      return res.status(200).json({ message: "Login Succesfull", userResponse });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}