import CodePromoRepo from '../../database/repository/CodePromoRepo';
import { BadRequestError } from '../../core/ApiError';

export const remove = async (id: string) => {
  const product = await CodePromoRepo.remove(id);
  if (!product) throw new BadRequestError('Code Promo not found');
};
