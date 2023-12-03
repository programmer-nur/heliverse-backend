import { Model, Types } from "mongoose";
import { IUser } from "../users/user.interface";

export type ITeam = {
  users: Types.ObjectId[] | IUser[];
};

export type TeamModel = Model<ITeam, Record<string, unknown>>;
