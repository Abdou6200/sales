"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SubCategory_1 = require("../../model/SubCategory");
const create = async (obj) => {
    return await SubCategory_1.SubCategoryModel.create(obj);
};
exports.default = create;
//# sourceMappingURL=create.js.map