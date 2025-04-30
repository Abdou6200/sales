"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const ApiError_1 = require("../../core/ApiError");
const SubCategoryRepo_1 = __importDefault(require("../../database/repository/SubCategoryRepo"));
const create = async ({ body, file }) => {
    if (file)
        body.picture = file.path;
    const subCategory = await SubCategoryRepo_1.default.create(body);
    if (!subCategory)
        throw new ApiError_1.BadRequestError('error creating subCategory');
    return subCategory;
};
exports.create = create;
//# sourceMappingURL=create.service.js.map