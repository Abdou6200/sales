"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedAdmin = void 0;
const Role_1 = require("../../database/model/Role");
const User_1 = require("../../database/model/User");
const seedAdmin = async (email, password, userName, phoneNumber) => {
    const roleAdmin = await Role_1.RoleModel.findOne({ code: "ADMIN" /* RoleCode.ADMIN */ });
    if (!roleAdmin) {
        console.log('Error seeding Admin : Role admin not found');
    }
    else {
        try {
            await User_1.UserModel.create({
                role: roleAdmin.id,
                userName,
                phoneNumber,
                email,
                password,
            });
            console.log('Admin seeded');
        }
        catch (error) {
            console.log('Error seeding Admin : ', error);
        }
    }
};
exports.seedAdmin = seedAdmin;
//# sourceMappingURL=seed.admin.js.map