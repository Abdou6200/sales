import { ObjectId } from 'mongoose';
import IUser, { UserModel } from '../../model/User';

const remove = async (id: string | ObjectId): Promise<IUser | null> => {
  return await UserModel.findByIdAndDelete(id).exec(); // ✅ real deletion
};

export default remove;
