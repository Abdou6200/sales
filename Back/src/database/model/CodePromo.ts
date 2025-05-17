import { model, Schema, Document, ObjectId } from 'mongoose';
import { mongoosePagination, Pagination } from 'mongoose-paginate-ts';
import { preFindHook } from '../../helpers/utils/databaseHooks';


export const DOCUMENT_NAME = 'CodePromo';
export const COLLECTION_NAME = 'codepromo';

export default interface ICodePromo extends Document {
  title: string;
  code: string;
  remise: string;
  duree: Date;
  picture: string;
  description: string;
  partner: ObjectId;
  deletedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const schema = new Schema<ICodePromo>(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    code: {
      type: String,
      trim: true,
      required: true,
    },
    remise: {
      type: String,
      trim: true,
      required: true,
    },
    duree: {
      type: Date,
      required: true,
    },
    picture: {
      type: String,
      trim: true,
      required: true, 
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    partner: {
      type: Schema.Types.ObjectId,
      ref: 'Partner',
      required: true,
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

preFindHook(schema); // soft-delete filtering
schema.plugin(mongoosePagination);

export const CodePromoModel = model<ICodePromo, Pagination<ICodePromo>>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);
