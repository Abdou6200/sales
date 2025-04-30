import SubCategoryRepo from '../../database/repository/SubCategoryRepo';
import { BadRequestError } from '../../core/ApiError';

export const remove = async (id: string) => {
  const subCategory = await SubCategoryRepo.remove(id);
  if (!subCategory) throw new BadRequestError('SubCategory not found');
};
