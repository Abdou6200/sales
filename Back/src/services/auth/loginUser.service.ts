import bcryptjs from 'bcryptjs';
import UserRepo from '../../database/repository/UserRepo';
import {
  BadRequestError,
  AuthFailureError,
  NotFoundError,
} from '../../core/ApiError';
import KeystoreRepo from '../../database/repository/KeystoreRepo';
import { createTokens } from '../../authUtils/authUtils';
import { generateKeys } from '../../helpers/utils/auth';
import { omit } from 'lodash';
import RoleRepo from '../../database/repository/RoleRepo';
import { RoleCode } from '../../database/model/Role';

interface LoginParams {
  email: string;
  password: string;
}

export const loginUser = async ({ email, password }: LoginParams) => {
  const roleUser = await RoleRepo.findByCode(RoleCode.USER);
  if (!roleUser) throw new NotFoundError('admin role not found');

  const user = await UserRepo.findByObjFull({
    email,
    role: roleUser!.id,
  });

  if (!user) throw new BadRequestError('User not registered');

  const match = await bcryptjs.compare(password, user.password);
  if (!match) throw new AuthFailureError('Authentication failure');

  const { accessTokenKey, refreshTokenKey } = generateKeys();
  await KeystoreRepo.create(user.id, accessTokenKey, refreshTokenKey);
  const [tokens] = await Promise.all([
    createTokens(user, accessTokenKey, refreshTokenKey),
    user,
  ]);

  const filteredUser = omit(user.toObject(), ['password']);

  return {
    tokens: tokens,
    user: filteredUser,
  };
};
