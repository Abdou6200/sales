"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SubCategory_1 = require("../../model/SubCategory");
const findByObj = (obj) => {
    return SubCategory_1.SubCategoryModel.findOne(obj).exec();
};
exports.default = findByObj;
//# sourceMappingURL=findByObj.js.map