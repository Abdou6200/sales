"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiFeatures_1 = __importDefault(require("../../../helpers/utils/apiFeatures"));
const Menu_1 = require("../../model/Menu");
const findById = async (id, queryString) => {
    let findOneQuery = Menu_1.MenuModel.findById(id);
    const features = new apiFeatures_1.default(findOneQuery, queryString)
        .limitFields()
        .populate();
    return await features.query.exec();
};
exports.default = findById;
//# sourceMappingURL=findById.js.map