import { BadRequestError } from '../../core/ApiError';
import ProductRepo from '../../database/repository/ProductRepo';

interface createParams {
  body: any;
  file?: Express.Request['file'];
}

export const create = async ({ body, file }: createParams) => {
  if (file) body.picture = file.path;
  const product = await ProductRepo.create(body);
  if (!product) throw new BadRequestError('error creating product');
  return product;
};
