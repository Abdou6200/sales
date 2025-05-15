import { model, Schema, Document, ObjectId, Types } from 'mongoose';
import { mongoosePagination, Pagination } from 'mongoose-paginate-ts';
import { preFindHook } from '../../helpers/utils/databaseHooks';
import IPartner from './Partner';

export const DOCUMENT_NAME = 'BonReduction';
export const COLLECTION_NAME = 'bonreduction';

export default interface IBonReduction extends Document {
  title: string;
  code: string;
  remise: string;
  duree: Date;
  picture: string;
  description: string;
  partner: IPartner | ObjectId;
  deletedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const schema = new Schema<IBonReduction>(
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


preFindHook(schema);

schema.plugin(mongoosePagination);

export const BonReductionModel = model<IBonReduction, Pagination<IBonReduction>>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);
