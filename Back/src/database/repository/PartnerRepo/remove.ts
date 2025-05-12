import { ObjectId } from 'mongoose';
import IPartner, { PartnerModel } from '../../model/Partner';

const remove = async (id: string | ObjectId): Promise<IPartner | null> => {
  return await PartnerModel.findByIdAndDelete(id).exec();
};

export default remove;
