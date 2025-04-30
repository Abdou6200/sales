import UserRepo from '../../database/repository/UserRepo';
import { BadRequestError, NotFoundError } from '../../core/ApiError';
import RoleRepo from '../../database/repository/RoleRepo';
import { RoleCode } from '../../database/model/Role';
import crypto from 'crypto';
import { sendPhoneMessage } from '../../helpers/utils/smsSender';

export const resendRegisterPhone = async (phoneNumber: string) => {
  const roleUser = await RoleRepo.findByCode(RoleCode.USER);
  if (!roleUser) throw new NotFoundError('admin role not found');

  const userCheck = await UserRepo.findByObj({
    phoneNumber,
    role: roleUser.id,
    verified: false,
  });
  if (!userCheck) throw new BadRequestError('invalid phone number');

  const randomCode = crypto.randomInt(1001, 9999);

  const user = await UserRepo.update(userCheck.id, {
    registerConfirmationCode: randomCode,
  });
  if (!user) throw new BadRequestError('error updating user');

  const message = `Your verification code is:${randomCode}`;

  await sendPhoneMessage(message, phoneNumber);
};
