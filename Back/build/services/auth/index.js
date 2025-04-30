"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loginUser_service_1 = require("./loginUser.service");
const loginAdmin_service_1 = require("./loginAdmin.service");
const logout_service_1 = require("./logout.service");
const refreshToken_service_1 = require("./refreshToken.service");
const registerPhone_1 = require("./registerPhone");
const resendRegisterPhone_1 = require("./resendRegisterPhone");
const verifyCodeRegister_1 = require("./verifyCodeRegister");
const setCredentials_1 = require("./setCredentials");
const forgetPassword_1 = require("./forgetPassword");
const verifyCodeForgetPasword_1 = require("./verifyCodeForgetPasword");
const resendForgetPassword_1 = require("./resendForgetPassword");
const resetPassword_1 = require("./resetPassword");
exports.default = {
    loginUser: loginUser_service_1.loginUser,
    loginAdmin: loginAdmin_service_1.loginAdmin,
    logout: logout_service_1.logout,
    refreshToken: refreshToken_service_1.refreshToken,
    registerPhone: registerPhone_1.registerPhone,
    resendRegisterPhone: resendRegisterPhone_1.resendRegisterPhone,
    verifyCodeRegister: verifyCodeRegister_1.verifyCodeRegister,
    setCredentials: setCredentials_1.setCredentials,
    forgetPassword: forgetPassword_1.forgetPassword,
    verifyCodeForgetPasword: verifyCodeForgetPasword_1.verifyCodeForgetPasword,
    resendForgetPassword: resendForgetPassword_1.resendForgetPassword,
    resetPassword: resetPassword_1.resetPassword,
};
//# sourceMappingURL=index.js.map