"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCredentials = void 0;
const UserRepo_1 = __importDefault(require("../../database/repository/UserRepo"));
const ApiError_1 = require("../../core/ApiError");
const RoleRepo_1 = __importDefault(require("../../database/repository/RoleRepo"));
const auth_1 = require("../../helpers/utils/auth");
const KeystoreRepo_1 = __importDefault(require("../../database/repository/KeystoreRepo"));
const authUtils_1 = require("../../authUtils/authUtils");
const lodash_1 = require("lodash");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const setCredentials = async ({ phoneNumber, registerConfirmationCode, userName, password, confirmPassword, }) => {
    const roleUser = await RoleRepo_1.default.findByCode("USER" /* RoleCode.USER */);
    if (!roleUser)
        throw new ApiError_1.NotFoundError('User role not found');
    const userCheck = await UserRepo_1.default.findByObj({
        phoneNumber,
        registerConfirmationCode,
        role: roleUser.id,
        verified: false,
    });
    if (!userCheck)
        throw new ApiError_1.BadRequestError('invalid phone number and code');
    if (password !== confirmPassword)
        throw new ApiError_1.BadRequestError('password and confirm password do not match');
    const userNameCheck = await UserRepo_1.default.findByObj({ userName });
    if (userNameCheck)
        throw new ApiError_1.BadRequestError('user with that username aleardy exists');
    const setUser = await UserRepo_1.default.update(userCheck.id, {
        verified: true,
        registerConfirmationCode: null,
        userName,
        password: await bcryptjs_1.default.hash(password, 12),
    });
    if (!setUser)
        throw new ApiError_1.BadRequestError('error setting user credentials');
    const { accessTokenKey, refreshTokenKey } = (0, auth_1.generateKeys)();
    await KeystoreRepo_1.default.create(setUser.id, accessTokenKey, refreshTokenKey);
    const [tokens] = await Promise.all([
        (0, authUtils_1.createTokens)(setUser, accessTokenKey, refreshTokenKey),
        setUser,
    ]);
    const filteredUser = (0, lodash_1.omit)(setUser.toObject(), ['password']);
    return {
        tokens: tokens,
        user: filteredUser,
    };
};
exports.setCredentials = setCredentials;
//# sourceMappingURL=setCredentials.js.map