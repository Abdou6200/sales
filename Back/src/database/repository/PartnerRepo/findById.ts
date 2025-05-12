import { ObjectId, Query } from 'mongoose';
import APIFeatures from '../../../helpers/utils/apiFeatures';
import IPartner, { PartnerModel } from '../../model/Partner';

const findById = async (
  id: string | ObjectId,
  queryString?: any
): Promise<IPartner | null> => {
  let findOneQuery: Query<any, any> = PartnerModel.findById(id);

  const features = new APIFeatures(findOneQuery, queryString)
    .limitFields()
    .populate();

  return await features.query.exec();
};

export default findById;
