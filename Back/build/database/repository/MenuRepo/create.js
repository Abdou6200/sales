"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Menu_1 = require("../../model/Menu");
const create = async (obj) => {
    return await Menu_1.MenuModel.create(obj);
};
exports.default = create;
//# sourceMappingURL=create.js.map