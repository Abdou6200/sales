import UserRepo from '../../database/repository/UserRepo';

export const getAll = async (query: any) => {
  const { page, perPage } = query;

  const options = {
    page: parseInt(page as string, 10) || 1,
    limit: parseInt(perPage as string, 10) || 100,
  };

  const users = await UserRepo.findAll(options, query);
  
  if (!users || !users.docs) {
    return {
      meta: {
        page: options.page,
        limit: options.limit,
        totalDocs: 0,
        totalPages: 0,
      },
      docs: [],
    };
  }

  const { docs, ...meta } = users;

  return {
    meta,
    docs,
  };
};
