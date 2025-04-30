import SubCategoryRepo from '../../database/repository/SubCategoryRepo';
import { BadRequestError } from '../../core/ApiError';

interface updateParams {
  id: string;
  body: any;
  file?: Express.Request['file'];
}

export const update = async ({ id, body, file }: updateParams) => {
  if (file) body.picture = file.path;
  const subCategory = await SubCategoryRepo.update(id, body);
  if (!subCategory) throw new BadRequestError('subCategory not found');
  return subCategory;
};
