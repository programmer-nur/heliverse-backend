"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const pagination_1 = require("../../utils/pagination");
const user_model_1 = require("./user.model");
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.Users.create(userData);
    return result;
});
const getAllUsers = (filters) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = filters, filterData = __rest(filters, ["searchTerm"]);
    const userSearchableFiled = ["first_name", "last_name"];
    const paginationData = {
        page: Number(filterData.page),
        limit: Number(filterData.limit),
    };
    const { page, limit, skip } = pagination_1.pagination.calculatePagination(paginationData);
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
    if (filterData.gender || filterData.domain || filterData.available) {
        mainCondition.push({
            $and: Object.entries(filterData).map(([field, value]) => ({
                [field]: value,
            })),
        });
    }
    const whereConditions = mainCondition.length > 0 ? { $and: mainCondition } : {};
    const result = yield user_model_1.Users.find(whereConditions)
        .limit(limit)
        .skip(skip)
        .lean();
    const total = yield user_model_1.Users.countDocuments();
    return {
        meta: {
            limit,
            page,
            total,
        },
        data: result,
    };
});
const getSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.Users.findById({ _id: id }).lean();
    return result;
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.Users.findByIdAndDelete(id);
    return result;
});
const updateUser = (id, userData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.Users.findByIdAndUpdate({ _id: id }, userData, {
        new: true,
    });
    return result;
});
exports.UserService = {
    createUser,
    getAllUsers,
    getSingleUser,
    deleteUser,
    updateUser,
};
