"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = void 0;
const SubCategoryRepo_1 = __importDefault(require("../../database/repository/SubCategoryRepo"));
const getAll = async (query) => {
    const { page, perPage } = query;
    const options = {
        page: parseInt(page, 10) || 1,
        limit: parseInt(perPage, 10) || 10,
    };
    const subCategorys = await SubCategoryRepo_1.default.findAll(options, query);
    const { docs, ...meta } = subCategorys;
    return {
        meta,
        docs,
    };
};
exports.getAll = getAll;
//# sourceMappingURL=getAll.service.js.map