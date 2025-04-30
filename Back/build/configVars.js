"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneProvider = exports.email = exports.userSeeder = exports.adminSeeder = exports.logDirectory = exports.tokenInfo = exports.corsUrl = exports.db = exports.apiPrefix = exports.baseUrl = exports.port = exports.environment = void 0;
exports.environment = process.env.NODE_ENV || '';
exports.port = process.env.PORT || '';
exports.baseUrl = process.env.BASE_URL || '';
exports.apiPrefix = process.env.API_PREFIX || '';
exports.db = {
    uri: process.env.DB_URI || '',
    host: process.env.DB_HOST || '',
};
exports.corsUrl = process.env.CORS_URL;
exports.tokenInfo = {
    accessTokenValidityDays: parseInt(process.env.ACCESS_TOKEN_VALIDITY_DAYS || '0'),
    refreshTokenValidityDays: parseInt(process.env.REFRESH_TOKEN_VALIDITY_DAYS || '0'),
    issuer: process.env.TOKEN_ISSUER || '',
    audience: process.env.TOKEN_AUDIENCE || '',
};
exports.logDirectory = process.env.LOG_DIR || '';
exports.adminSeeder = {
    adminName: process.env.ADMIN_NAME || '',
    adminEmail: process.env.ADMIN_EMAIL || '',
    adminPass: process.env.ADMIN_PASS || '',
    adminPhone: process.env.ADMIN_PHONE || '',
};
exports.userSeeder = {
    userName: process.env.USER_NAME || '',
    userEmail: process.env.USER_EMAIL || '',
    userPass: process.env.USER_PASS || '',
    userPhone: process.env.USER_PHONE || '',
};
exports.email = {
    smtpService: process.env.SMTP_SERVICE || '',
    smtpHost: process.env.EMAIL_HOST || '',
    smtpPort: process.env.EMAIL_PORT || '',
    smtpUser: process.env.EMAIL_USERNAME || '',
    smtpPass: process.env.EMAIL_PASSWORD || '',
};
exports.phoneProvider = {
    url: process.env.SMS_URL,
    key: process.env.SMS_KEY,
    sender: process.env.SMS_SENDER,
    fct: process.env.SMS_FUNCTION,
};
//# sourceMappingURL=configVars.js.map