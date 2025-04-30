"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendPhoneMessage = void 0;
const axios_1 = __importDefault(require("axios"));
const configVars_1 = require("../../configVars");
const ApiError_1 = require("../../core/ApiError");
const Logger_1 = __importDefault(require("../../core/Logger"));
const date = new Date();
const hoursAndMinutes = date.getHours() + ':' + date.getMinutes();
const sms_key = configVars_1.phoneProvider.key;
const sms_sender = configVars_1.phoneProvider.sender;
const sms_function = configVars_1.phoneProvider.fct;
const sms_url = configVars_1.phoneProvider.url;
const sms_date = date.toLocaleDateString('fr-FR');
const sms_hour = hoursAndMinutes;
const sendPhoneMessage = async (message, receiver) => {
    try {
        const response = await axios_1.default.get(`${sms_url}`, {
            params: {
                fct: sms_function,
                key: sms_key,
                mobile: `216${receiver}`,
                sms: message,
                sender: sms_sender,
                date: sms_date,
                heure: sms_hour,
            },
        });
        return response;
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            Logger_1.default.error('error message: ', error);
        }
        else {
            Logger_1.default.error('unexpected error: ', error);
        }
        throw new ApiError_1.BadRequestError('error sending sms');
    }
};
exports.sendPhoneMessage = sendPhoneMessage;
//# sourceMappingURL=smsSender.js.map