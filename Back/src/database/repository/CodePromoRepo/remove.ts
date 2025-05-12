import { ObjectId } from 'mongoose';
import ICodePromo, { CodePromoModel } from '../../model/CodePromo';

const remove = async (id: string | ObjectId): Promise<ICodePromo | null> => {
  return await CodePromoModel.findByIdAndUpdate(
    id,
    { $set: { deletedAt: Date.now() } },
    { new: true }
  ).exec();
};

export default remove;
