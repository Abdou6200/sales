import BonReductionRepo from '../../database/repository/BonReductionRepo';

export const getAll = async (query: any) => {
  const { page, perPage } = query;
  const options = {
    page: parseInt(page as string, 10) || 1,
    limit: parseInt(perPage as string, 10) || 10,
  };

  const products = await BonReductionRepo.findAll(options, query);
  const { docs, ...meta } = products;

  return {
    meta,
    docs,
  };
};
