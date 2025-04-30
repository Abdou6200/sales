import ProductRepo from '../../database/repository/ProductRepo';
import { BadRequestError } from '../../core/ApiError';

export const getOne = async (id: string, query: any) => {
  const product = await ProductRepo.findById(id, query);
  if (!product) throw new BadRequestError('Product not found');
  return product;
};
