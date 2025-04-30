"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Menu_1 = require("../../model/Menu");
const remove = async (id) => {
    return await Menu_1.MenuModel.findByIdAndUpdate(id, { $set: { deletedAt: Date.now() } }, { new: true }).exec();
};
exports.default = remove;
//# sourceMappingURL=remove.js.map