import { model, Schema, Document, ObjectId } from 'mongoose';
import { mongoosePagination, Pagination } from 'mongoose-paginate-ts';
import { preFindHook } from '../../helpers/utils/databaseHooks';
import IMenu from './Menu';

export const DOCUMENT_NAME = 'Product';
export const COLLECTION_NAME = 'poducts';

export default interface IProduct extends Document {
  name: string;
  description: string;
  picture: string;
  subProduct: IMenu | ObjectId;
  deletedAt?: Date;
}

const schema = new Schema<IProduct>(
  {
    name: {
      type: Schema.Types.String,
      trim: true,
    },
    description: {
      type: Schema.Types.String,
      trim: true,
    },
    picture: {
      type: Schema.Types.String,
      trim: true,
    },
    subProduct: {
      type: Schema.Types.ObjectId,
      ref: 'SubProduct',
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

export const ProductModel = model<IProduct, Pagination<IProduct>>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);
