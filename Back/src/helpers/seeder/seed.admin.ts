import { RoleModel, RoleCode } from '../../database/model/Role';
import { UserModel } from '../../database/model/User';

export const seedAdmin = async (
  email: string,
  password: string,
  userName: string,
  phoneNumber: string
) => {
  const roleAdmin = await RoleModel.findOne({ code: RoleCode.ADMIN });

  if (!roleAdmin) {
    console.log('Error seeding Admin : Role admin not found');
  } else {
    try {
      await UserModel.create({
        role: roleAdmin.id,
        userName,
        phoneNumber,
        email,
        password,
      });
      console.log('Admin seeded');
    } catch (error) {
      console.log('Error seeding Admin : ', error);
    }
  }
};
