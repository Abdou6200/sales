import { BadRequestError } from '../../core/ApiError';
import CategoryRepo from '../../database/repository/CategoryRepo';

interface createParams {
  body: any;
  file?: Express.Request['file'];
}

export const create = async ({ body, file }: createParams) => {
  if (file) body.picture = file.path;
  const category = await CategoryRepo.create(body);
  if (!category) throw new BadRequestError('error creating category');
  return category;
};
