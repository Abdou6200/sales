import CodePromoRepo from '../../database/repository/CodePromoRepo';
import { BadRequestError } from '../../core/ApiError';

interface updateParams {
  id: string;
  body: any;
  file?: Express.Request['file'];
}

export const update = async ({ id, body, file }: updateParams) => {
  if (file) body.picture = file.path;
  const product = await CodePromoRepo.update(id, body);
  if (!product) throw new BadRequestError('Code Promo not found');
  return product;
};
