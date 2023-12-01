import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.createUser(req.body);
    res.send();
  } catch (error) {}
};
