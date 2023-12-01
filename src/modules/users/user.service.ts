import { IUser } from "./user.interface";
import { Users } from "./user.model";

const createUser = async (userData: IUser) => {
  const result = await Users.create(userData);
  return result;
};

export const UserService = {
  createUser,
};
