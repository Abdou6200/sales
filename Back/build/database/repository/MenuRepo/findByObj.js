"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Menu_1 = require("../../model/Menu");
const findByObj = (obj) => {
    return Menu_1.MenuModel.findOne(obj).exec();
};
exports.default = findByObj;
//# sourceMappingURL=findByObj.js.map