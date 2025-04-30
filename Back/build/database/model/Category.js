"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModel = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
const mongoose_paginate_ts_1 = require("mongoose-paginate-ts");
const databaseHooks_1 = require("../../helpers/utils/databaseHooks");
exports.DOCUMENT_NAME = 'Category';
exports.COLLECTION_NAME = 'categorys';
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
    menu: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Menu',
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
exports.CategoryModel = (0, mongoose_1.model)(exports.DOCUMENT_NAME, schema, exports.COLLECTION_NAME);
//# sourceMappingURL=Category.js.map