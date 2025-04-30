import { RoleModel, RoleCode } from '../../database/model/Role';
import { UserModel } from '../../database/model/User';

export const seedUser = async (
  email: string,
  password: string,
  userName: string,
  phoneNumber: string
) => {
  const roleUser = await RoleModel.findOne({ code: RoleCode.USER });

  if (!roleUser) {
    console.log('Error seeding User : Role user not found');
  } else {
    try {
      await UserModel.create({
        role: roleUser.id,
        userName,
        email,
        password,
        phoneNumber,
      });
      console.log('User seeded');
    } catch (error) {
      console.log('Error seeding User : ', error);
    }
  }
};
