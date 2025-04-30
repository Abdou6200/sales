"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
const mongoose_paginate_ts_1 = require("mongoose-paginate-ts");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const databaseHooks_1 = require("../../helpers/utils/databaseHooks");
exports.DOCUMENT_NAME = 'User';
exports.COLLECTION_NAME = 'users';
const schema = new mongoose_1.Schema({
    userName: {
        type: mongoose_1.Schema.Types.String,
        trim: true,
    },
    email: {
        type: mongoose_1.Schema.Types.String,
        unique: true,
        sparse: true,
        trim: true,
        set: (value) => value.toLocaleLowerCase(),
    },
    password: {
        type: mongoose_1.Schema.Types.String,
        select: false,
    },
    phoneNumber: {
        type: mongoose_1.Schema.Types.String,
        trim: true,
        unique: true,
        sparse: true,
    },
    avatar: {
        type: mongoose_1.Schema.Types.String,
        default: 'public/avatar-default-icon.png',
    },
    verified: {
        type: mongoose_1.Schema.Types.Boolean,
        default: false,
    },
    registerConfirmationCode: {
        type: mongoose_1.Schema.Types.Number,
    },
    forgetConfirmationCode: {
        type: mongoose_1.Schema.Types.Number,
    },
    role: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Role',
    },
    deletedAt: {
        type: Date,
        default: null,
        select: false,
    },
}, {
    timestamps: true,
    versionKey: false,
});
(0, databaseHooks_1.preFindHook)(schema);
schema.plugin(mongoose_paginate_ts_1.mongoosePagination);
schema.pre('save', async function (next) {
    var _a;
    if (this.isModified('email'))
        this.email = (_a = this.email) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase();
    if (!this.isModified('password'))
        return next();
    this.password = await bcryptjs_1.default.hash(this.password, 12);
    next();
});
schema.methods.comparePassword = async function (password) {
    return await bcryptjs_1.default.compare(password, this.password);
};
exports.UserModel = (0, mongoose_1.model)(exports.DOCUMENT_NAME, schema, exports.COLLECTION_NAME);
//# sourceMappingURL=User.js.map