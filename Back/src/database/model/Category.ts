import { model, Schema, Document, ObjectId } from 'mongoose';
import { mongoosePagination, Pagination } from 'mongoose-paginate-ts';
import { preFindHook } from '../../helpers/utils/databaseHooks';

export const DOCUMENT_NAME = 'Category';
export const COLLECTION_NAME = 'categorys';

export default interface ICategory extends Document {
  name: string;
  picture: string;
  deletedAt?: Date;
}

const schema = new Schema<ICategory>(
  {
    name: {
      type: Schema.Types.String,
      trim: true,
    },
    picture: {
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

export const CategoryModel = model<ICategory, Pagination<ICategory>>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);
