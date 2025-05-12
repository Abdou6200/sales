import { BadRequestError } from '../../core/ApiError';
import BonReductionRepo from '../../database/repository/BonReductionRepo';

interface createParams {
  body: any;
  file?: Express.Request['file'];
}

export const create = async ({ body, file }: createParams) => {
  if (file) body.picture = file.path;
  const product = await BonReductionRepo.create(body);
  if (!product) throw new BadRequestError('Error creating Bon Reduction');
  return product;
};
