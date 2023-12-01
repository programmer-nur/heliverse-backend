import { IPageOptions, pagination } from "../../utils/pagination";
import { IUser } from "./user.interface";
import { Users } from "./user.model";

const createUser = async (userData: IUser) => {
  const result = await Users.create(userData);
  return result;
};

const getAllUsers = async (filters: any) => {
  const { searchTerm, ...filterData } = filters;
  const userSearchableFiled = ["first_name", "last_name"];
  const mainCondition = [];

  if (searchTerm) {
    mainCondition.push({
      $or: userSearchableFiled.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  if (filterData.email || filterData.domain || filterData.available) {
    mainCondition.push({
      $and: Object.entries(filterData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const { page, limit, skip } = pagination.calculatePagination(filterData);
  const whereConditions =
    mainCondition.length > 0 ? { $and: mainCondition } : {};
  const result = await Users.find(whereConditions)
    .limit(limit)
    .skip(skip)
    .lean();

  const total = await Users.countDocuments();
  return {
    meta: {
      limit,
      page,
      total,
    },
    data: result,
  };
};

export const UserService = {
  createUser,
  getAllUsers,
};
