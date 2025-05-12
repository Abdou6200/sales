import { ObjectId, Query } from 'mongoose';
import APIFeatures from '../../../helpers/utils/apiFeatures';
import ICodePromo, { CodePromoModel } from '../../model/CodePromo';

const findById = async (
  id: string | ObjectId,
  queryString?: any
): Promise<ICodePromo | null> => {
  let findOneQuery: Query<any, any> = CodePromoModel.findById(id);

  const features = new APIFeatures(findOneQuery, queryString)
    .limitFields()
    .populate();

  return await features.query.exec();
};

export default findById;
