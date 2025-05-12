import IBonReduction, { BonReductionModel } from '../../model/BonReduction';
import { PaginationModel } from 'mongoose-paginate-ts';
import APIFeatures from '../../../helpers/utils/apiFeatures';

type pagingObj = {
  limit: number;
  page: number;
};

const findAll = async (
  paging: pagingObj,
  query: object
): Promise<PaginationModel<IBonReduction>> => {
  let findAllQuery = BonReductionModel.find();

  const features = new APIFeatures(findAllQuery, query)
    .filter()
    .sort()
    .recherche(['name'])
    .limitFields()
    .populate();

  const options = {
    query: features.query,
    limit: paging.limit ? paging.limit : null,
    page: paging.page ? paging.page : null,
  };
  return (await BonReductionModel.paginate(options)) as PaginationModel<IBonReduction>;
};

export default findAll;
