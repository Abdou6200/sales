"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const ApiError_1 = require("../../core/ApiError");
const MenuRepo_1 = __importDefault(require("../../database/repository/MenuRepo"));
const create = async ({ body, file }) => {
    if (file)
        body.picture = file.path;
    const menu = await MenuRepo_1.default.create(body);
    if (!menu)
        throw new ApiError_1.BadRequestError('error creating menu');
    return menu;
};
exports.create = create;
//# sourceMappingURL=create.service.js.map