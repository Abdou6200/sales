import CategoryRepo from '../../database/repository/CategoryRepo';
import { BadRequestError } from '../../core/ApiError';

interface updateParams {
  id: string;
  body: any;
  file?: Express.Request['file'];
}

export const update = async ({ id, body, file }: updateParams) => {
  if (file) body.picture = file.path;
  const category = await CategoryRepo.update(id, body);
  if (!category) throw new BadRequestError('category not found');
  return category;
};
