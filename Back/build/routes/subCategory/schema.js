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
        name: joi_1.default.string().min(3).max(200).required(),
        description: joi_1.default.string().min(3).max(400),
        category: (0, validator_1.JoiObjectId)().required(),
    }),
    update: joi_1.default.object().keys({
        name: joi_1.default.string().min(3).max(200),
        description: joi_1.default.string().min(3).max(400),
        category: (0, validator_1.JoiObjectId)(),
    }),
};
//# sourceMappingURL=schema.js.map