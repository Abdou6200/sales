import UserRepo from '../../database/repository/UserRepo';
import { BadRequestError, NotFoundError } from '../../core/ApiError';
import RoleRepo from '../../database/repository/RoleRepo';
import { RoleCode } from '../../database/model/Role';
import { generateKeys } from '../../helpers/utils/auth';
import KeystoreRepo from '../../database/repository/KeystoreRepo';
import { createTokens } from '../../authUtils/authUtils';
import { omit } from 'lodash';
import bcrypt from 'bcryptjs';

interface SetCredentialsParams {
  phoneNumber: string;
  registerConfirmationCode: number;
  userName: string;
  password: string;
  confirmPassword: string;
}

export const setCredentials = async ({
  phoneNumber,
  registerConfirmationCode,
  userName,
  password,
  confirmPassword,
}: SetCredentialsParams) => {
  const roleUser = await RoleRepo.findByCode(RoleCode.USER);
  if (!roleUser) throw new NotFoundError('User role not found');

  const userCheck = await UserRepo.findByObj({
    phoneNumber,
    registerConfirmationCode,
    role: roleUser.id,
    verified: false,
  });
  if (!userCheck) throw new BadRequestError('invalid phone number and code');

  if (password !== confirmPassword)
    throw new BadRequestError('password and confirm password do not match');

  const userNameCheck = await UserRepo.findByObj({ userName });
  if (userNameCheck)
    throw new BadRequestError('user with that username aleardy exists');

  const setUser = await UserRepo.update(userCheck.id, {
    verified: true,
    registerConfirmationCode: null,
    userName,
    password: await bcrypt.hash(password, 12),
  });
  if (!setUser) throw new BadRequestError('error setting user credentials');

  const { accessTokenKey, refreshTokenKey } = generateKeys();
  await KeystoreRepo.create(setUser.id, accessTokenKey, refreshTokenKey);
  const [tokens] = await Promise.all([
    createTokens(setUser, accessTokenKey, refreshTokenKey),
    setUser,
  ]);

  const filteredUser = omit(setUser.toObject(), ['password']);

  return {
    tokens: tokens,
    user: filteredUser,
  };
};
