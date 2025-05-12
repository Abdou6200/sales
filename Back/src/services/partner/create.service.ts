import PartnerRepo from '../../database/repository/PartnerRepo';
import { BadRequestError } from '../../core/ApiError';

interface createParams {
  body: any;
  file?: Express.Request['file'];
}

export const create = async ({ body, file }: createParams) => {
 // if (file) body.avatar = file.path;
  const user = await PartnerRepo.create(body);
  if (!user) throw new BadRequestError('Error creating Partner');
  return user;
};
