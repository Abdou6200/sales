import { model, Schema, Document, ObjectId } from 'mongoose';
import { mongoosePagination, Pagination } from 'mongoose-paginate-ts';
import bcrypt from 'bcryptjs';
import { preFindHook } from '../../helpers/utils/databaseHooks';
import IRole from './Role';

export const DOCUMENT_NAME = 'User';
export const COLLECTION_NAME = 'users';

export default interface IUser extends Document {
  userName: string;
  email: string;
  password: string;
  phoneNumber: string;
  age: number;
  avatar: string;
  verified: boolean;
  registerConfirmationCode: number | null;
  forgetConfirmationCode: number | null;
  role: IRole | ObjectId;
  deletedAt?: Date;
}

const schema = new Schema<IUser>(
  {
    userName: {
      type: Schema.Types.String,
      trim: true,
    },
    email: {
      type: Schema.Types.String,
      unique: true,
      sparse: true,
      trim: true,
      set: (value: string) => value.toLocaleLowerCase(),
    },
    password: {
      type: Schema.Types.String,
      select: false,
    },
    phoneNumber: {
      type: Schema.Types.String,
      trim: true,
      unique: true,
      sparse: true,
    },
    age: {
      type: Schema.Types.Number,
    },
    avatar: {
      type: Schema.Types.String,
      default: 'public/avatar-default-icon.png',
    },
    verified: {
      type: Schema.Types.Boolean,
      default: false,
    },
    registerConfirmationCode: {
      type: Schema.Types.Number,
    },
    forgetConfirmationCode: {
      type: Schema.Types.Number,
    },
    role: {
      type: Schema.Types.ObjectId,
      ref: 'Role',
    },
    deletedAt: {
      type: Date,
      default: null,
      select: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

preFindHook(schema);

schema.plugin(mongoosePagination);

schema.pre('save', async function (this: IUser, next) {
  if (this.isModified('email')) this.email = this.email?.toLocaleLowerCase();
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

schema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

export const UserModel = model<IUser, Pagination<IUser>>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);
