"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedRoles = void 0;
const Role_1 = require("../../database/model/Role");
const seedRoles = async (roles) => {
    try {
        const rolesArray = roles.map((role) => {
            return {
                code: role,
            };
        });
        await Role_1.RoleModel.create(rolesArray);
        console.info(`Roles seeded`);
    }
    catch (err) {
        console.error('Error seeding roles:', err);
    }
};
exports.seedRoles = seedRoles;
//# sourceMappingURL=seed.roles.js.map