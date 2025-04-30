import { seedRoles } from './seed.roles';
import { seedAdmin } from './seed.admin';
import { RoleCode } from '../../database/model/Role';
import { adminSeeder, userSeeder, environment } from '../../configVars';
import { seedDelete } from './drop';
import '../../database';
import { seedUser } from './seed.user';

export let seed = async (args = { clearDatabase: false }) => {
  if (args.clearDatabase) await seedDelete();

  await seedRoles([RoleCode.ADMIN, RoleCode.USER,RoleCode.PARTNER]);

  await seedAdmin(
    adminSeeder.adminEmail,
    adminSeeder.adminPass,
    adminSeeder.adminName,
    adminSeeder.adminPhone
  );

  await seedUser(
    userSeeder.userEmail,
    userSeeder.userPass,
    userSeeder.userName,
    userSeeder.userPhone
  );

  environment !== 'test' && process.exit(1);
};

seed({ clearDatabase: environment === 'test' });
