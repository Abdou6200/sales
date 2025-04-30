import { Schema, model, Document } from 'mongoose';

export const DOCUMENT_NAME = 'Role';
export const COLLECTION_NAME = 'roles';

export const enum RoleCode {
  ADMIN = 'ADMIN',
  USER = 'USER',
  PARTNER = 'PARTNER'
}

export default interface IRole extends Document {
  code: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const schema = new Schema<IRole>(
  {
    code: {
      type: Schema.Types.String,
      required: true,
      enum: [RoleCode.ADMIN, RoleCode.USER,RoleCode.PARTNER],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const RoleModel = model<IRole>(DOCUMENT_NAME, schema, COLLECTION_NAME);
