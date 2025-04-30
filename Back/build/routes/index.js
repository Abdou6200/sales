"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./auth/router"));
const router_2 = __importDefault(require("./user/router"));
const router_3 = __importDefault(require("./category/router"));
const router_4 = __importDefault(require("./menu/router"));
const router_5 = __importDefault(require("./subCategory/router"));
const router_6 = __importDefault(require("./product/router"));
const router = express_1.default.Router();
router.use('/auth', router_1.default);
router.use('/users', router_2.default);
router.use('/categories', router_3.default);
router.use('/menus', router_4.default);
router.use('/sub-categories', router_5.default);
router.use('/products', router_6.default);
exports.default = router;
//# sourceMappingURL=index.js.map