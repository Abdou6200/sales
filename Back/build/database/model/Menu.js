"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuModel = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
const mongoose_paginate_ts_1 = require("mongoose-paginate-ts");
const databaseHooks_1 = require("../../helpers/utils/databaseHooks");
exports.DOCUMENT_NAME = 'Menu';
exports.COLLECTION_NAME = 'menus';
const schema = new mongoose_1.Schema({
    name: {
        type: mongoose_1.Schema.Types.String,
        trim: true,
    },
    description: {
        type: mongoose_1.Schema.Types.String,
        trim: true,
    },
    picture: {
        type: mongoose_1.Schema.Types.String,
        trim: true,
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
exports.MenuModel = (0, mongoose_1.model)(exports.DOCUMENT_NAME, schema, exports.COLLECTION_NAME);
//# sourceMappingURL=Menu.js.map