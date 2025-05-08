import UserRepo from '../../database/repository/UserRepo';
import { BadRequestError, NotFoundError } from '../../core/ApiError';
import RoleRepo from '../../database/repository/RoleRepo';
import { RoleCode } from '../../database/model/Role';
import crypto from 'crypto';
import { sendPhoneMessage } from '../../helpers/utils/smsSender';

export const registerUser = async (userName: string, email: string, age: number, phoneNumber: string, password: string) => {
  const userCheck = await UserRepo.findByObj({ phoneNumber });
  if (userCheck)
    throw new BadRequestError('User with that phone number or email aleardy exists');
  const roleUser = await RoleRepo.findByCode(RoleCode.USER);
  if (!roleUser) throw new NotFoundError('user role not found');

  const user = await UserRepo.create({
    userName,
    email,
    age,
    phoneNumber,
    password,
    verified: true,
    role:roleUser

  });
  if (!user) throw new BadRequestError('error creating user');


};
