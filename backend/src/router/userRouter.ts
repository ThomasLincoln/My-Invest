import { Router } from "express";
import { UserController } from "../controller/UserController";
import { AuthController } from "../controller/AuthController";

const userRouter = Router();
userRouter.get("/users", UserController.all);
userRouter.post("/users", UserController.create)
userRouter.get("/users/:id", UserController.findOne);
userRouter.put("/users/:id", UserController.update);
userRouter.delete("/users/:id", UserController.delete);
userRouter.post("/users/login", AuthController.login);

export default userRouter;