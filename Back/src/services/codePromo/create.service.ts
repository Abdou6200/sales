import { BadRequestError } from '../../core/ApiError';
import CodePromoRepo from '../../database/repository/CodePromoRepo';

interface createParams {
  body: any;
  file?: Express.Request['file'];
}

export const create = async ({ body, file }: createParams) => {
  if (file) body.picture = file.path;
  const product = await CodePromoRepo.create(body);
  if (!product) throw new BadRequestError('Error creating Code Promo');
  return product;
};
