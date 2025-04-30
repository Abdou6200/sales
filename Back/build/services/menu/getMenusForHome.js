"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMenusForHome = void 0;
const CategoryRepo_1 = __importDefault(require("../../database/repository/CategoryRepo"));
const MenuRepo_1 = __importDefault(require("../../database/repository/MenuRepo"));
const getMenusForHome = async (query) => {
    const { page, perPage } = query;
    const options = {
        page: parseInt(page, 10) || 1,
        limit: parseInt(perPage, 10) || 10,
    };
    const menus = await MenuRepo_1.default.findAll(options, query);
    let result = [];
    await Promise.all(menus.docs.map(async (menu) => {
        const categories = await CategoryRepo_1.default.findAllNotPaginated({
            menu: menu._id,
        });
        const resultMenu = { ...menu, categories };
        result.push(resultMenu);
    }));
    const { docs, ...meta } = menus;
    return {
        meta,
        docs: result,
    };
};
exports.getMenusForHome = getMenusForHome;
//# sourceMappingURL=getMenusForHome.js.map