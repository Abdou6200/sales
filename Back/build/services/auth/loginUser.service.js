"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const UserRepo_1 = __importDefault(require("../../database/repository/UserRepo"));
const ApiError_1 = require("../../core/ApiError");
const KeystoreRepo_1 = __importDefault(require("../../database/repository/KeystoreRepo"));
const authUtils_1 = require("../../authUtils/authUtils");
const auth_1 = require("../../helpers/utils/auth");
const lodash_1 = require("lodash");
const RoleRepo_1 = __importDefault(require("../../database/repository/RoleRepo"));
const loginUser = async ({ phoneNumber, password }) => {
    const roleUser = await RoleRepo_1.default.findByCode("USER" /* RoleCode.USER */);
    if (!roleUser)
        throw new ApiError_1.NotFoundError('admin role not found');
    const user = await UserRepo_1.default.findByObjFull({
        phoneNumber,
        role: roleUser.id,
    });
    if (!user)
        throw new ApiError_1.BadRequestError('User not registered');
    const match = await bcryptjs_1.default.compare(password, user.password);
    if (!match)
        throw new ApiError_1.AuthFailureError('Authentication failure');
    const { accessTokenKey, refreshTokenKey } = (0, auth_1.generateKeys)();
    await KeystoreRepo_1.default.create(user.id, accessTokenKey, refreshTokenKey);
    const [tokens] = await Promise.all([
        (0, authUtils_1.createTokens)(user, accessTokenKey, refreshTokenKey),
        user,
    ]);
    const filteredUser = (0, lodash_1.omit)(user.toObject(), ['password']);
    return {
        tokens: tokens,
        user: filteredUser,
    };
};
exports.loginUser = loginUser;
//# sourceMappingURL=loginUser.service.js.map