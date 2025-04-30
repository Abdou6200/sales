"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = void 0;
const SubCategoryRepo_1 = __importDefault(require("../../database/repository/SubCategoryRepo"));
const ApiError_1 = require("../../core/ApiError");
const remove = async (id) => {
    const subCategory = await SubCategoryRepo_1.default.remove(id);
    if (!subCategory)
        throw new ApiError_1.BadRequestError('SubCategory not found');
};
exports.remove = remove;
//# sourceMappingURL=delete.service.js.map