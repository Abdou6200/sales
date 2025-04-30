import MessageRepo from '../../database/repository/MessageRepo';
import { BadRequestError } from '../../core/ApiError';

interface createParams {
  body: any;
  file?: Express.Request['file'];
}

export const create = async ({ body, file }: createParams) => {
  if (file) body.avatar = file.path;
  const user = await MessageRepo.create(body);
  if (!user) throw new BadRequestError('error sending message');
  return user;
};
