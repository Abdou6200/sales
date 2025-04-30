"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SubCategory_1 = require("../../model/SubCategory");
const update = async (id, obj) => {
    return await SubCategory_1.SubCategoryModel.findByIdAndUpdate(id, { $set: { ...obj } }, { new: true, runValidators: true, context: 'query' }).exec();
};
exports.default = update;
//# sourceMappingURL=update.js.map