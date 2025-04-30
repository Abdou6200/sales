import IProduct, { ProductModel } from '../../model/Product';
import { PaginationModel } from 'mongoose-paginate-ts';
import APIFeatures from '../../../helpers/utils/apiFeatures';

type pagingObj = {
  limit: number;
  page: number;
};

const findAll = async (
  paging: pagingObj,
  query: object
): Promise<PaginationModel<IProduct>> => {
  let findAllQuery = ProductModel.find();

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
  return (await ProductModel.paginate(options)) as PaginationModel<IProduct>;
};

export default findAll;
