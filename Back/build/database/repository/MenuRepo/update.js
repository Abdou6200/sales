"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Menu_1 = require("../../model/Menu");
const update = async (id, obj) => {
    return await Menu_1.MenuModel.findByIdAndUpdate(id, { $set: { ...obj } }, { new: true, runValidators: true, context: 'query' }).exec();
};
exports.default = update;
//# sourceMappingURL=update.js.map