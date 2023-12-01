import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/users", UserController.createUser);
router.get("/users/:id", UserController.getSingleUser);
router.get("/users", UserController.getAllUsers);

export default router;
