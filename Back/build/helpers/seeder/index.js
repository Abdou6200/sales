"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
const seed_roles_1 = require("./seed.roles");
const seed_admin_1 = require("./seed.admin");
const configVars_1 = require("../../configVars");
const drop_1 = require("./drop");
require("../../database");
const seed_user_1 = require("./seed.user");
let seed = async (args = { clearDatabase: false }) => {
    if (args.clearDatabase)
        await (0, drop_1.seedDelete)();
    await (0, seed_roles_1.seedRoles)(["ADMIN" /* RoleCode.ADMIN */, "USER" /* RoleCode.USER */]);
    await (0, seed_admin_1.seedAdmin)(configVars_1.adminSeeder.adminEmail, configVars_1.adminSeeder.adminPass, configVars_1.adminSeeder.adminName, configVars_1.adminSeeder.adminPhone);
    await (0, seed_user_1.seedUser)(configVars_1.userSeeder.userEmail, configVars_1.userSeeder.userPass, configVars_1.userSeeder.userName, configVars_1.userSeeder.userPhone);
    configVars_1.environment !== 'test' && process.exit(1);
};
exports.seed = seed;
(0, exports.seed)({ clearDatabase: configVars_1.environment === 'test' });
//# sourceMappingURL=index.js.map