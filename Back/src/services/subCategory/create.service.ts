import { BadRequestError } from '../../core/ApiError';
import SubCategoryRepo from '../../database/repository/SubCategoryRepo';

interface createParams {
  body: any;
  file?: Express.Request['file'];
}

export const create = async ({ body, file }: createParams) => {
  if (file) body.picture = file.path;
  const subCategory = await SubCategoryRepo.create(body);
  if (!subCategory) throw new BadRequestError('error creating subCategory');
  return subCategory;
};
