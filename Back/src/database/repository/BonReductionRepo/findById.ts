import { ObjectId, Query } from 'mongoose';
import APIFeatures from '../../../helpers/utils/apiFeatures';
import IBonReduction, { BonReductionModel } from '../../model/BonReduction';

const findById = async (
  id: string | ObjectId,
  queryString?: any
): Promise<IBonReduction | null> => {
  let findOneQuery: Query<any, any> = BonReductionModel.findById(id);

  const features = new APIFeatures(findOneQuery, queryString)
    .limitFields()
    .populate();

  return await features.query.exec();
};

export default findById;
