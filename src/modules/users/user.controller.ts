import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.createUser(req.body);
    res.send({
      success: true,
      message: "Users created successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUsers(req.query);
    res.send({
      success: true,
      message: "Users retrieved successfully",
      meta: result.meta,
      data: result.data,
    });
  } catch (error) {
    res.send(error);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await UserService.getSingleUser(id);
    res.send({
      success: true,
      message: "User retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await UserService.deleteUser(id);
    res.send({
      success: true,
      message: "User delete successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userData = req.body;
    const result = await UserService.updateUser(id, userData);
    res.send({
      success: true,
      message: "User update successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
export const UserController = {
  createUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUser,
};
