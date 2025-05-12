import CodePromoRepo from '../../database/repository/CodePromoRepo';
import { BadRequestError } from '../../core/ApiError';

export const getOne = async (id: string, query: any) => {
  const product = await CodePromoRepo.findById(id, query);
  if (!product) throw new BadRequestError('Code Promo not found');
  return product;
};
