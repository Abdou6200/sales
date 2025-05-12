import { model, Schema, Document, ObjectId } from 'mongoose';
import { mongoosePagination, Pagination } from 'mongoose-paginate-ts';
import bcrypt from 'bcryptjs';
import { preFindHook } from '../../helpers/utils/databaseHooks';
import IRole from './Role';
import ICategory from './Category';

export const DOCUMENT_NAME = 'Partner';
export const COLLECTION_NAME = 'partners';

export default interface IPartner extends Document {
  companyName: string;
  email: string;
  password: string;
  phoneNumber: string;
  city: string;
  category: ICategory | ObjectId;
  avatar: string;
  verified: boolean;
  role: IRole | ObjectId;
  deletedAt?: Date;
}

const schema = new Schema<IPartner>(
  {
    companyName: {
      type: Schema.Types.String,
      trim: true,
      required: true, 
    },
    email: {
      type: Schema.Types.String,
      unique: true,
      sparse: true,
      trim: true,
      lowercase: true, 
      required: true,  
    },
    password: {
      type: Schema.Types.String,
      select: false, 
      required: true,  
    },
    phoneNumber: {
      type: Schema.Types.String,
      trim: true,
      unique: true,
      sparse: true,
      required: true, 
    },
    city: {
      type: Schema.Types.String,
      required: true, 
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category', 
      required: true, 
    },
    avatar: {
      type: Schema.Types.String,
      default: 'public/avatar-default-icon.png', 
    },
    verified: {
      type: Schema.Types.Boolean,
      default: false,  
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

schema.pre('save', async function (this: IPartner, next) {
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

export const PartnerModel = model<IPartner, Pagination<IPartner>>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);
