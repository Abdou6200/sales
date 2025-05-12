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
  deletedAt?: Date;
}

const schema = new Schema<ICodePromo>(
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

export const CodePromoModel = model<ICodePromo, Pagination<ICodePromo>>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);
