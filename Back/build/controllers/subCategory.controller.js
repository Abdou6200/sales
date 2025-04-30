"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.getOne = exports.getAll = exports.create = void 0;
const asyncHandler_1 = __importDefault(require("../helpers/utils/asyncHandler"));
const subCategory_1 = __importDefault(require("../services/subCategory"));
const ApiResponse_1 = require("../core/ApiResponse");
exports.create = (0, asyncHandler_1.default)(async (req, res) => {
    const { body, file } = req;
    const result = await subCategory_1.default.create({ body, file });
    new ApiResponse_1.SuccessResponse('SubCategory created', result).send(res);
});
exports.getAll = (0, asyncHandler_1.default)(async (req, res) => {
    const { query } = req;
    const result = await subCategory_1.default.getAll(query);
    new ApiResponse_1.SuccessResponsePaginate('All subCategorys returned successfuly', result.docs, result.meta).send(res);
});
exports.getOne = (0, asyncHandler_1.default)(async (req, res) => {
    const { id } = req.params;
    const { query } = req;
    const result = await subCategory_1.default.getOne(id, query);
    new ApiResponse_1.SuccessResponse('SubCategory returned', result).send(res);
});
exports.update = (0, asyncHandler_1.default)(async (req, res) => {
    const { id } = req.params;
    const { body, file } = req;
    const result = await subCategory_1.default.update({ id, body, file });
    new ApiResponse_1.SuccessResponse('SubCategory updated', result).send(res);
});
exports.remove = (0, asyncHandler_1.default)(async (req, res) => {
    const { id } = req.params;
    await subCategory_1.default.remove(id);
    new ApiResponse_1.SuccessMsgResponse('SubCategory Deleted').send(res);
});
//# sourceMappingURL=subCategory.controller.js.map