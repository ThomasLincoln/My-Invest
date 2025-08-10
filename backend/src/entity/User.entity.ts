import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from "typeorm";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  @Column({ name: "user_id" })
  id!: number;

  @Column({ name: "first_name", type: "string", width: 50 })
  fisrtName!: string;

  @Column({ name: "last_name", type: "string", width: 50 })
  lastName!: string;

  @Column({ name: "email", type: "string", width: 100 })
  email!: string;

  @Column({ name: "password_hash", type: "string" })
  passwordHash!: string;

  @Column({ name: "created_at", type: "date" })
  createdAt?: Date;

  @Column({ name: "last_login", type: "date" })
  lastLogin?: Date;
}