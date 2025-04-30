import UserRepo from '../../database/repository/UserRepo';
import { BadRequestError, NotFoundError } from '../../core/ApiError';
import RoleRepo from '../../database/repository/RoleRepo';
import { RoleCode } from '../../database/model/Role';
import crypto from 'crypto';
import { sendPhoneMessage } from '../../helpers/utils/smsSender';

export const forgetPassword = async (phoneNumber: string) => {
  const userCheck = await UserRepo.findByObj({ phoneNumber });
  if (!userCheck) throw new NotFoundError('User not found');

  const roleUser = await RoleRepo.findByCode(RoleCode.USER);
  if (!roleUser) throw new NotFoundError('User role not found');

  const randomCode = crypto.randomInt(1001, 9999);

  const user = await UserRepo.update(userCheck.id, {
    forgetConfirmationCode: randomCode,
  });
  if (!user) throw new BadRequestError('error updating user');

  const message = `Your verification code is:${randomCode}`;

  await sendPhoneMessage(message, phoneNumber);
};
