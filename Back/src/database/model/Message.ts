import { model, Schema, Document } from 'mongoose';
import { mongoosePagination, Pagination } from 'mongoose-paginate-ts';
import { preFindHook } from '../../helpers/utils/databaseHooks';

export const DOCUMENT_NAME = 'Message';
export const COLLECTION_NAME = 'messages';

export default interface IMessage extends Document {
  name: string;
  phone: string;
  email: string;
  message: string
}

const schema = new Schema<IMessage>(
  {
    name: {
      type: Schema.Types.String,
      trim: true,
    },
    phone: {
      type: Schema.Types.String,
      trim: true,
    },
    email: {
      type: Schema.Types.String,
      trim: true,
    },
    message: {
      type: Schema.Types.String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

preFindHook(schema);
schema.plugin(mongoosePagination);

export const MessageModel = model<IMessage, Pagination<IMessage>>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);