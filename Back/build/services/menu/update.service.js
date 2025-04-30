"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
const MenuRepo_1 = __importDefault(require("../../database/repository/MenuRepo"));
const ApiError_1 = require("../../core/ApiError");
const update = async ({ id, body, file }) => {
    if (file)
        body.picture = file.path;
    const menu = await MenuRepo_1.default.update(id, body);
    if (!menu)
        throw new ApiError_1.BadRequestError('menu not found');
    return menu;
};
exports.update = update;
//# sourceMappingURL=update.service.js.map