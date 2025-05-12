import { ObjectId } from 'mongoose';
import IPartner, { PartnerModel } from '../../model/Partner';

const update = async (
  id: string | ObjectId,
  obj: Partial<IPartner>
): Promise<IPartner | null> => {
  return await PartnerModel.findByIdAndUpdate(
    id,
    { $set: { ...obj } },
    { new: true, runValidators: true, context: 'query' }
  ).exec();
};

export default update;
