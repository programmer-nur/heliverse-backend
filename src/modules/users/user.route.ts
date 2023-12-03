import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/", UserController.createUser);
router.get("/:id", UserController.getSingleUser);
router.delete("/:id", UserController.deleteUser);
router.put("/:id", UserController.updateUser);
router.get("/", UserController.getAllUsers);

export const userRoutes = router;
