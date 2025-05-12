import { ObjectId } from 'mongoose';
import IBonReduction, { BonReductionModel } from '../../model/BonReduction';

const update = async (
  id: string | ObjectId,
  obj: Partial<IBonReduction>
): Promise<IBonReduction | null> => {
  return await BonReductionModel.findByIdAndUpdate(
    id,
    { $set: { ...obj } },
    { new: true, runValidators: true, context: 'query' }
  ).exec();
};

export default update;
