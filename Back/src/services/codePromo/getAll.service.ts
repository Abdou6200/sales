import CodePromoRepo from '../../database/repository/CodePromoRepo';

export const getAll = async (query: any) => {
  const { page, perPage } = query;
  const options = {
    page: parseInt(page as string, 10) || 1,
    limit: parseInt(perPage as string, 10) || 10,
  };

  const products = await CodePromoRepo.findAll(options, query);
  const { docs, ...meta } = products;

  return {
    meta,
    docs,
  };
};
