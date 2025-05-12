import PartnerRepo from '../../database/repository/PartnerRepo';
import { BadRequestError } from '../../core/ApiError';

export const getOne = async (id: string, query: any) => {
  const user = await PartnerRepo.findById(id, query);
  if (!user) throw new BadRequestError('Partner not found');
  return user;
};
