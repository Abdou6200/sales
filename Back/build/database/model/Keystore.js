"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeystoreModel = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
/* eslint-disable prettier/prettier */
const mongoose_1 = require("mongoose");
exports.DOCUMENT_NAME = 'Keystore';
exports.COLLECTION_NAME = 'keystores';
const schema = new mongoose_1.Schema({
    client: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    primaryKey: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    secondaryKey: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});
schema.index({ client: 1, primaryKey: 1 });
schema.index({ client: 1, primaryKey: 1, secondaryKey: 1 });
exports.KeystoreModel = (0, mongoose_1.model)(exports.DOCUMENT_NAME, schema, exports.COLLECTION_NAME);
//# sourceMappingURL=Keystore.js.map