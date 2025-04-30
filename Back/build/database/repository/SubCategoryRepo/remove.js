"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SubCategory_1 = require("../../model/SubCategory");
const remove = async (id) => {
    return await SubCategory_1.SubCategoryModel.findByIdAndUpdate(id, { $set: { deletedAt: Date.now() } }, { new: true }).exec();
};
exports.default = remove;
//# sourceMappingURL=remove.js.map