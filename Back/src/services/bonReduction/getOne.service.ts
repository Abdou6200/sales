import BonReductionRepo from '../../database/repository/BonReductionRepo';
import { BadRequestError } from '../../core/ApiError';

export const getOne = async (id: string, query: any) => {
  const product = await BonReductionRepo.findById(id, query);
  if (!product) throw new BadRequestError('Bon Reduction not found');
  return product;
};
