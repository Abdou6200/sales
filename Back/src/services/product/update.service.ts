import ProductRepo from '../../database/repository/ProductRepo';
import { BadRequestError } from '../../core/ApiError';

interface updateParams {
  id: string;
  body: any;
  file?: Express.Request['file'];
}

export const update = async ({ id, body, file }: updateParams) => {
  if (file) body.picture = file.path;
  const product = await ProductRepo.update(id, body);
  if (!product) throw new BadRequestError('product not found');
  return product;
};
