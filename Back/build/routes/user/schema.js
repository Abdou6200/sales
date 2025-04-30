"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
const validator_1 = require("../../helpers/utils/validator");
exports.default = {
    param: joi_1.default.object().keys({
        id: (0, validator_1.JoiObjectId)().required(),
    }),
    create: joi_1.default.object().keys({
        userName: joi_1.default.string().min(3).max(200).required(),
        email: joi_1.default.string().email().required(),
        password: joi_1.default.string().min(8).required(),
        verified: joi_1.default.boolean().required(),
        phoneNumber: joi_1.default.string()
            .pattern(/^(2[0-9]{7}|9[0-9]{7}|4[0-9]{7}|5[0-9]{7}|7[0-9]{7})$/, 'numbers')
            .required(),
    }),
    update: joi_1.default.object().keys({
        userName: joi_1.default.string().min(3).max(200),
        email: joi_1.default.string().email(),
        password: joi_1.default.string().min(8),
        verified: joi_1.default.boolean(),
        phoneNumber: joi_1.default.string().pattern(/^(2[0-9]{7}|9[0-9]{7}|4[0-9]{7}|5[0-9]{7}|7[0-9]{7})$/, 'numbers'),
    }),
};
//# sourceMappingURL=schema.js.map