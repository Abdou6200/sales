import PartnerRepo from '../../database/repository/PartnerRepo';
import { BadRequestError } from '../../core/ApiError';

export const remove = async (id: string) => {
  const user = await PartnerRepo.remove(id);
  if (!user) throw new BadRequestError('Partner not found');
};
