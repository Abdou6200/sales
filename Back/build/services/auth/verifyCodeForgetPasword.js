"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyCodeForgetPasword = void 0;
const UserRepo_1 = __importDefault(require("../../database/repository/UserRepo"));
const ApiError_1 = require("../../core/ApiError");
const RoleRepo_1 = __importDefault(require("../../database/repository/RoleRepo"));
const verifyCodeForgetPasword = async ({ phoneNumber, forgetConfirmationCode, }) => {
    const roleUser = await RoleRepo_1.default.findByCode("USER" /* RoleCode.USER */);
    if (!roleUser)
        throw new ApiError_1.NotFoundError('User role not found');
    const userCheck = await UserRepo_1.default.findByObj({
        phoneNumber,
        forgetConfirmationCode,
        role: roleUser.id,
    });
    if (!userCheck)
        throw new ApiError_1.BadRequestError('invalid phone number and code');
};
exports.verifyCodeForgetPasword = verifyCodeForgetPasword;
//# sourceMappingURL=verifyCodeForgetPasword.js.map