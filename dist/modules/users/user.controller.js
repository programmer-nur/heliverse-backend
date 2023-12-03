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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("./user.service");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserService.createUser(req.body);
        res.send({
            success: true,
            message: "Users created successfully",
            data: result,
        });
    }
    catch (error) {
        res.send(error);
    }
});
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserService.getAllUsers(req.query);
        res.send({
            success: true,
            message: "Users retrieved successfully",
            meta: result.meta,
            data: result.data,
        });
    }
    catch (error) {
        res.send(error);
    }
});
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield user_service_1.UserService.getSingleUser(id);
        res.send({
            success: true,
            message: "User retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        res.send(error);
    }
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield user_service_1.UserService.deleteUser(id);
        res.send({
            success: true,
            message: "User delete successfully",
            data: result,
        });
    }
    catch (error) {
        res.send(error);
    }
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const userData = req.body;
        const result = yield user_service_1.UserService.updateUser(id, userData);
        res.send({
            success: true,
            message: "User update successfully",
            data: result,
        });
    }
    catch (error) {
        res.send(error);
    }
});
exports.UserController = {
    createUser,
    getAllUsers,
    getSingleUser,
    deleteUser,
    updateUser,
};
