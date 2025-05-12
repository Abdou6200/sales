import { ObjectId } from 'mongoose';
import ICodePromo, { CodePromoModel } from '../../model/CodePromo';

const update = async (
  id: string | ObjectId,
  obj: Partial<ICodePromo>
): Promise<ICodePromo | null> => {
  return await CodePromoModel.findByIdAndUpdate(
    id,
    { $set: { ...obj } },
    { new: true, runValidators: true, context: 'query' }
  ).exec();
};

export default update;
