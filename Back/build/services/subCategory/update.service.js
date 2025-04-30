"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
const SubCategoryRepo_1 = __importDefault(require("../../database/repository/SubCategoryRepo"));
const ApiError_1 = require("../../core/ApiError");
const update = async ({ id, body, file }) => {
    if (file)
        body.picture = file.path;
    const subCategory = await SubCategoryRepo_1.default.update(id, body);
    if (!subCategory)
        throw new ApiError_1.BadRequestError('subCategory not found');
    return subCategory;
};
exports.update = update;
//# sourceMappingURL=update.service.js.map