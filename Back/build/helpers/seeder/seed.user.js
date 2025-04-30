"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedUser = void 0;
const Role_1 = require("../../database/model/Role");
const User_1 = require("../../database/model/User");
const seedUser = async (email, password, userName, phoneNumber) => {
    const roleUser = await Role_1.RoleModel.findOne({ code: "USER" /* RoleCode.USER */ });
    if (!roleUser) {
        console.log('Error seeding User : Role user not found');
    }
    else {
        try {
            await User_1.UserModel.create({
                role: roleUser.id,
                userName,
                email,
                password,
                phoneNumber,
            });
            console.log('User seeded');
        }
        catch (error) {
            console.log('Error seeding User : ', error);
        }
    }
};
exports.seedUser = seedUser;
//# sourceMappingURL=seed.user.js.map