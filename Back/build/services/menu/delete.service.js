"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = void 0;
const MenuRepo_1 = __importDefault(require("../../database/repository/MenuRepo"));
const ApiError_1 = require("../../core/ApiError");
const remove = async (id) => {
    const menu = await MenuRepo_1.default.remove(id);
    if (!menu)
        throw new ApiError_1.BadRequestError('Menu not found');
};
exports.remove = remove;
//# sourceMappingURL=delete.service.js.map