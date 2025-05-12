import PartnerRepo from '../../database/repository/PartnerRepo';
import { BadRequestError } from '../../core/ApiError';
import bcrypt from 'bcryptjs';

interface updateParams {
  id: string;
  body: any;
  file?: Express.Request['file'];
}

export const update = async ({ id, body, file }: updateParams) => {
  if (file) body.avatar = file.path;
  if (body.password) body.password = await bcrypt.hash(body.password, 12);
  const user = await PartnerRepo.update(id, body);
  if (!user) throw new BadRequestError('Partner not found');
  return user;
};
