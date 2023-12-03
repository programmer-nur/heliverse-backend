"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagination = void 0;
const calculatePagination = (option) => {
    const page = Number(option.page || 1);
    const limit = Number(option.limit || 20);
    const skip = (page - 1) * limit;
    return {
        page,
        limit,
        skip,
    };
};
exports.pagination = {
    calculatePagination,
};
