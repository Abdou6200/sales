"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fileUpload_1 = __importDefault(require("../../helpers/fileUpload"));
const authentication_1 = __importDefault(require("../../authUtils/authentication"));
const userController = __importStar(require("../../controllers/user.controller"));
const validator_1 = __importStar(require("../../helpers/utils/validator"));
const schema_1 = __importDefault(require("./schema"));
const authorization_1 = __importDefault(require("../../authUtils/authorization"));
const fileUploadHandler = new fileUpload_1.default();
const router = express_1.default.Router();
router.use('/', authentication_1.default);
router
    .route('/')
    .post((0, authorization_1.default)(["ADMIN" /* RoleCode.ADMIN */]), fileUploadHandler.handleSingleFileUpload('avatar'), (0, validator_1.default)(schema_1.default.create), userController.create)
    .get((0, authorization_1.default)(["ADMIN" /* RoleCode.ADMIN */, "USER" /* RoleCode.USER */]), userController.getAll);
router
    .route('/me')
    .get((0, authorization_1.default)(["ADMIN" /* RoleCode.ADMIN */, "USER" /* RoleCode.USER */]), userController.updateMe)
    .put((0, authorization_1.default)(["ADMIN" /* RoleCode.ADMIN */, "USER" /* RoleCode.USER */]), fileUploadHandler.handleSingleFileUpload('avatar'), (0, validator_1.default)(schema_1.default.update), userController.updateMe);
router
    .route('/:id')
    .get((0, authorization_1.default)(["ADMIN" /* RoleCode.ADMIN */, "USER" /* RoleCode.USER */]), (0, validator_1.default)(schema_1.default.param, validator_1.ValidationSource.PARAM), userController.getOne)
    .put((0, authorization_1.default)(["ADMIN" /* RoleCode.ADMIN */]), fileUploadHandler.handleSingleFileUpload('avatar'), (0, validator_1.default)(schema_1.default.param, validator_1.ValidationSource.PARAM), (0, validator_1.default)(schema_1.default.update), userController.update)
    .delete((0, authorization_1.default)(["ADMIN" /* RoleCode.ADMIN */]), (0, validator_1.default)(schema_1.default.param, validator_1.ValidationSource.PARAM), userController.remove);
exports.default = router;
//# sourceMappingURL=router.js.map