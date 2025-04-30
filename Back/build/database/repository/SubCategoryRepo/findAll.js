"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SubCategory_1 = require("../../model/SubCategory");
const apiFeatures_1 = __importDefault(require("../../../helpers/utils/apiFeatures"));
const findAll = async (paging, query) => {
    let findAllQuery = SubCategory_1.SubCategoryModel.find();
    const features = new apiFeatures_1.default(findAllQuery, query)
        .filter()
        .sort()
        .recherche(['name'])
        .limitFields()
        .populate();
    const options = {
        query: features.query,
        limit: paging.limit ? paging.limit : null,
        page: paging.page ? paging.page : null,
    };
    return (await SubCategory_1.SubCategoryModel.paginate(options));
};
exports.default = findAll;
//# sourceMappingURL=findAll.js.map