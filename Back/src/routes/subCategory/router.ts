import express from 'express';
import FileUploadHandler from '../../helpers/fileUpload';
import authentication from '../../authUtils/authentication';
import * as subCategoryController from '../../controllers/subCategory.controller';
import validator, { ValidationSource } from '../../helpers/utils/validator';
import schema from './schema';
import authorization from '../../authUtils/authorization';
import { RoleCode } from '../../database/model/Role';
const fileUploadHandler = new FileUploadHandler();

const router = express.Router();

router
  .route('/')
  .post(
    authentication,
    authorization([RoleCode.ADMIN]),
    fileUploadHandler.handleSingleFileUpload('picture'),
    validator(schema.create),
    subCategoryController.create
  )
  .get(subCategoryController.getAll);

router
  .route('/:id')
  .get(
    validator(schema.param, ValidationSource.PARAM),
    subCategoryController.getOne
  )
  .put(
    authentication,
    authorization([RoleCode.ADMIN]),
    fileUploadHandler.handleSingleFileUpload('picture'),
    validator(schema.param, ValidationSource.PARAM),
    validator(schema.update),
    subCategoryController.update
  )
  .delete(
    authentication,
    authorization([RoleCode.ADMIN]),
    validator(schema.param, ValidationSource.PARAM),
    subCategoryController.remove
  );

export default router;
