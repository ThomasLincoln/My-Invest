import { Router } from "express";
import { UserController } from "../controller/UserController";
import { AuthController } from "../controller/AuthController";
import { authMiddleware } from "../middleware/authMiddleware";

const userRouter = Router();
userRouter.post("/users", UserController.create);
userRouter.get("/users", authMiddleware, UserController.all);
userRouter.post("/users/login", AuthController.login);
userRouter.get('/users/me', authMiddleware, AuthController.me);

export default userRouter;