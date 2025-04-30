"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resendRegisterPhone = void 0;
const UserRepo_1 = __importDefault(require("../../database/repository/UserRepo"));
const ApiError_1 = require("../../core/ApiError");
const RoleRepo_1 = __importDefault(require("../../database/repository/RoleRepo"));
const crypto_1 = __importDefault(require("crypto"));
const smsSender_1 = require("../../helpers/utils/smsSender");
const resendRegisterPhone = async (phoneNumber) => {
    const roleUser = await RoleRepo_1.default.findByCode("USER" /* RoleCode.USER */);
    if (!roleUser)
        throw new ApiError_1.NotFoundError('admin role not found');
    const userCheck = await UserRepo_1.default.findByObj({
        phoneNumber,
        role: roleUser.id,
        verified: false,
    });
    if (!userCheck)
        throw new ApiError_1.BadRequestError('invalid phone number');
    const randomCode = crypto_1.default.randomInt(1001, 9999);
    const user = await UserRepo_1.default.update(userCheck.id, {
        registerConfirmationCode: randomCode,
    });
    if (!user)
        throw new ApiError_1.BadRequestError('error updating user');
    const message = `Your verification code is:${randomCode}`;
    await (0, smsSender_1.sendPhoneMessage)(message, phoneNumber);
};
exports.resendRegisterPhone = resendRegisterPhone;
//# sourceMappingURL=resendRegisterPhone.js.map