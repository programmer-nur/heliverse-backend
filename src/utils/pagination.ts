import { SortOrder } from "mongoose";

export type IPageOptions = {
  page?: number;
  limit?: number;
};

type IPageOptionsResults = {
  page: number;
  limit: number;
  skip: number;
};

const calculatePagination = (option: IPageOptions): IPageOptionsResults => {
  const page = Number(option.page || 1);
  const limit = Number(option.limit || 20);
  const skip = (page - 1) * limit;

  return {
    page,
    limit,
    skip,
  };
};

export const pagination = {
  calculatePagination,
};
