import {
  Column, CreateDateColumn, Entity, PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Column({ name: "user_id" })
  id?: number;

  @Column({ name: "first_name", length: 50, type: "varchar" })
  firstName?: string;

  @Column({ name: "last_name", length: 50, type: "varchar" })
  lastName?: string;

  @Column({ name: "email", length: 100, type: "varchar" })
  email?: string;

  @Column({ name: "password_hash", length: 100, type: "varchar" })
  passwordHash!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}