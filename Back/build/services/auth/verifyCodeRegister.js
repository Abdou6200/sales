"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyCodeRegister = void 0;
const UserRepo_1 = __importDefault(require("../../database/repository/UserRepo"));
const ApiError_1 = require("../../core/ApiError");
const RoleRepo_1 = __importDefault(require("../../database/repository/RoleRepo"));
const verifyCodeRegister = async ({ phoneNumber, registerConfirmationCode, }) => {
    const roleUser = await RoleRepo_1.default.findByCode("USER" /* RoleCode.USER */);
    if (!roleUser)
        throw new ApiError_1.NotFoundError('admin role not found');
    const userCheck = await UserRepo_1.default.findByObj({
        phoneNumber,
        registerConfirmationCode,
        role: roleUser.id,
        verified: false,
    });
    if (!userCheck)
        throw new ApiError_1.BadRequestError('invalid phone number and code');
};
exports.verifyCodeRegister = verifyCodeRegister;
//# sourceMappingURL=verifyCodeRegister.js.map