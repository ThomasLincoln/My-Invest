import { Repository } from "typeorm";
import { User } from "../entity/User";

export class UserService {
  constructor(private readonly userRepository: Repository<User>) { }
  async findAll() {
    const users = await this.userRepository.find();
    return users;
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({ where: { id } })
    return user;
  }

  async createUser(newUser: User) {
    const user = this.userRepository.create(newUser);
    await this.userRepository.save(user);
    return user;
  }

  async updateUser(id: number, data: Partial<User>) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (user) {
      this.userRepository.merge(user, data);
      await this.userRepository.save(user);
      return user;
    } else {
      return { message: "User not found" };
    }
  }

  async delete(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (user) {
      await this.userRepository.remove(user);
      return { message: "User Deleted successfully" };
    } else {
      return { message: "User not found" };
    }
  }
}