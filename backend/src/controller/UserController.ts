import { Request, Response } from "express";
import { userRepository } from "../repository";
import { encrypt } from "../helpers/helper";
import { User } from "../entity/User";

export class UserController {
    static async all(req: Request, res: Response) {
        const data = await userRepository.findAll();
        return res.status(200).send(data);
    }
    
    static async create(req: Request, res: Response) {
        const { firstName, lastName, email, passwordHash } = req.body;
        const encryptPassword = await encrypt.encryptPass(passwordHash);
        const user = new User();
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.password = encryptPassword;
        const data = await userRepository.createUser(user);
        return res.status(200).send(data);
    }
}
