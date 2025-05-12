import ICodePromo, { CodePromoModel } from '../../model/CodePromo';
import { PaginationModel } from 'mongoose-paginate-ts';
import APIFeatures from '../../../helpers/utils/apiFeatures';

type pagingObj = {
  limit: number;
  page: number;
};

const findAll = async (
  paging: pagingObj,
  query: object
): Promise<PaginationModel<ICodePromo>> => {
  let findAllQuery = CodePromoModel.find();

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
  return (await CodePromoModel.paginate(options)) as PaginationModel<ICodePromo>;
};

export default findAll;
