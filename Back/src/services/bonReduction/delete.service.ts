import BonReductionRepo from '../../database/repository/BonReductionRepo';
import { BadRequestError } from '../../core/ApiError';

export const remove = async (id: string) => {
  const product = await BonReductionRepo.remove(id);
  if (!product) throw new BadRequestError('Bon Reduction not found');
};
