import IPartner, { PartnerModel } from '../../model/Partner';
import { PaginationModel } from 'mongoose-paginate-ts';
import APIFeatures from '../../../helpers/utils/apiFeatures';

type pagingObj = {
  limit: number;
  page: number;
};

const findAll = async (
  paging: pagingObj,
  query: object
): Promise<PaginationModel<IPartner>> => {
  let findAllQuery = PartnerModel.find();

  const features = new APIFeatures(findAllQuery, query)
    .filter()
    .sort()
    .recherche(['userName', 'phoneNumber'])
    .limitFields()
    .populate();

  const options = {
    query: features.query,
    limit: paging.limit ? paging.limit : null,
    page: paging.page ? paging.page : null,
  };
  return (await PartnerModel.paginate(options)) as PaginationModel<IPartner>;
};

export default findAll;
