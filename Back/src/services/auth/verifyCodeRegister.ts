import UserRepo from '../../database/repository/UserRepo';
import { BadRequestError, NotFoundError } from '../../core/ApiError';
import RoleRepo from '../../database/repository/RoleRepo';
import { RoleCode } from '../../database/model/Role';

interface verifyCodeParams {
  phoneNumber: string;
  registerConfirmationCode: number;
}

export const verifyCodeRegister = async ({
  phoneNumber,
  registerConfirmationCode,
}: verifyCodeParams) => {
  const roleUser = await RoleRepo.findByCode(RoleCode.USER);
  if (!roleUser) throw new NotFoundError('admin role not found');

  const userCheck = await UserRepo.findByObj({
    phoneNumber,
    registerConfirmationCode,
    role: roleUser.id,
    verified: false,
  });
  if (!userCheck) throw new BadRequestError('invalid phone number and code');
};
