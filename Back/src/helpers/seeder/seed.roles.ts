import { RoleModel, RoleCode } from '../../database/model/Role';

export const seedRoles = async (roles: RoleCode[]) => {
  try {
    const rolesArray = roles.map((role) => {
      return {
        code: role,
      };
    });

    await RoleModel.create(rolesArray);

    console.info(`Roles seeded`);
  } catch (err) {
    console.error('Error seeding roles:', err);
  }
};
