"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOne = void 0;
const MenuRepo_1 = __importDefault(require("../../database/repository/MenuRepo"));
const ApiError_1 = require("../../core/ApiError");
const getOne = async (id, query) => {
    const menu = await MenuRepo_1.default.findById(id, query);
    if (!menu)
        throw new ApiError_1.BadRequestError('Menu not found');
    return menu;
};
exports.getOne = getOne;
//# sourceMappingURL=getOne.service.js.map