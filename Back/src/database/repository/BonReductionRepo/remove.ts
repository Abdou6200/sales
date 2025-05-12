import { ObjectId } from 'mongoose';
import IBonReduction, { BonReductionModel } from '../../model/BonReduction';

const remove = async (id: string | ObjectId): Promise<IBonReduction | null> => {
  return await BonReductionModel.findByIdAndUpdate(
    id,
    { $set: { deletedAt: Date.now() } },
    { new: true }
  ).exec();
};

export default remove;
