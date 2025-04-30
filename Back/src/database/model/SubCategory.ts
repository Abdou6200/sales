import { model, Schema, Document, ObjectId } from 'mongoose';
import { mongoosePagination, Pagination } from 'mongoose-paginate-ts';
import { preFindHook } from '../../helpers/utils/databaseHooks';
import ICategory from './Category';

export const DOCUMENT_NAME = 'SubCategory';
export const COLLECTION_NAME = 'SubCategorys';

export default interface ISubCategory extends Document {
  name: string;
  description: string;
  picture: string;
  category: ICategory | ObjectId;
  deletedAt?: Date;
}

const schema = new Schema<ISubCategory>(
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
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
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

export const SubCategoryModel = model<ISubCategory, Pagination<ISubCategory>>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);
