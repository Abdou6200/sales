import { model, Schema, Document, ObjectId } from 'mongoose';
import { mongoosePagination, Pagination } from 'mongoose-paginate-ts';
import { preFindHook } from '../../helpers/utils/databaseHooks';

export const DOCUMENT_NAME = 'BonReduction';
export const COLLECTION_NAME = 'bonreduction';

export default interface IBonReduction extends Document {
  title: string;
  code: string;
  remise: string;
  duree: Date;
  picture: string;
  description: string;
  deletedAt?: Date;
}

const schema = new Schema<IBonReduction>(
  {
    title: {
      type: Schema.Types.String,
      trim: true,
    },
    code: {
        type: Schema.Types.String,
        trim: true,
    },
    remise: {
        type: Schema.Types.String,
        trim: true,
    },
    duree: {
        type: Date,
    },
    picture: {
      type: Schema.Types.String,
      trim: true,
    },
    description: {
        type: Schema.Types.String,
        trim: true,
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
