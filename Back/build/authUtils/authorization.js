"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = require("../core/ApiError");
const asyncHandler_1 = __importDefault(require("../helpers/utils/asyncHandler"));
exports.default = (roles) => (0, asyncHandler_1.default)(async (req, res, next) => {
    if (!req.user || !req.user.role)
        throw new ApiError_1.AuthFailureError('Permission denied');
    const userRoleCode = req.user.role.code;
    if (roles.includes(userRoleCode))
        return next();
    throw new ApiError_1.AuthFailureError('Permission denied');
});
//# sourceMappingURL=authorization.js.map