"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOne = void 0;
const SubCategoryRepo_1 = __importDefault(require("../../database/repository/SubCategoryRepo"));
const ApiError_1 = require("../../core/ApiError");
const getOne = async (id, query) => {
    const subCategory = await SubCategoryRepo_1.default.findById(id, query);
    if (!subCategory)
        throw new ApiError_1.BadRequestError('SubCategory not found');
    return subCategory;
};
exports.getOne = getOne;
//# sourceMappingURL=getOne.service.js.map