import { Schema } from 'mongoose';
import { NextFunction } from 'express';

interface FieldToPopulate {
  path: string;
  select?: string;
}

type FieldsToPopulate = string[] | FieldToPopulate[];

export function preFindHook(schema: Schema) {
  schema.pre(/^find/, function (this: any, next: NextFunction) {
    this.find({ deletedAt: null });
    next();
  });
}
