import { IUser, UserModel } from "./user.interface";
import { Schema, model } from "mongoose";

const userSchema = new Schema<IUser, UserModel>({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  avatar: { type: String, required: true },
  domain: { type: String, required: true },
  available: { type: Boolean, required: true },
});

export const Users = model<IUser, UserModel>("Users", userSchema);
