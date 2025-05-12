import BonReductionRepo from '../../database/repository/BonReductionRepo';
import { BadRequestError } from '../../core/ApiError';

interface updateParams {
  id: string;
  body: any;
  file?: Express.Request['file'];
}

export const update = async ({ id, body, file }: updateParams) => {
  if (file) body.picture = file.path;
  const product = await BonReductionRepo.update(id, body);
  if (!product) throw new BadRequestError('Bon Reduction not found');
  return product;
};
