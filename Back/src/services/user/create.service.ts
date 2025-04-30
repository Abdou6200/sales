import UserRepo from '../../database/repository/UserRepo';
import { BadRequestError } from '../../core/ApiError';

interface createParams {
  body: any;
  file?: Express.Request['file'];
}

export const create = async ({ body, file }: createParams) => {
  if (file) body.avatar = file.path;
  const user = await UserRepo.create(body);
  if (!user) throw new BadRequestError('error creating user');
  return user;
};
