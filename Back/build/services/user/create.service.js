"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const UserRepo_1 = __importDefault(require("../../database/repository/UserRepo"));
const ApiError_1 = require("../../core/ApiError");
const create = async ({ body, file }) => {
    if (file)
        body.avatar = file.path;
    const user = await UserRepo_1.default.create(body);
    if (!user)
        throw new ApiError_1.BadRequestError('error creating user');
    return user;
};
exports.create = create;
//# sourceMappingURL=create.service.js.map