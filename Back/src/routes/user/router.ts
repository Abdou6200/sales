import express from 'express';
import FileUploadHandler from '../../helpers/fileUpload';
import authentication from '../../authUtils/authentication';
import * as userController from '../../controllers/user.controller';
import validator, { ValidationSource } from '../../helpers/utils/validator';
import schema from './schema';
import authorization from '../../authUtils/authorization';
import { RoleCode } from '../../database/model/Role';
const fileUploadHandler = new FileUploadHandler();

const router = express.Router();

router.use('/', authentication);

router
  .route('/')
  .post(
    authorization([RoleCode.ADMIN]),
    validator(schema.create),
  //  fileUploadHandler.handleSingleFileUpload('avatar'),
    userController.create
  )
  .get(authorization([RoleCode.ADMIN, RoleCode.USER]), userController.getAll);

router
  .route('/me')
  .get(authorization([RoleCode.ADMIN, RoleCode.USER]), userController.getMe)
  .put(
    authorization([RoleCode.ADMIN, RoleCode.USER]),
    fileUploadHandler.handleSingleFileUpload('avatar'),
    validator(schema.update),
    userController.updateMe
  );

router
  .route('/:id')
  .get(
    authorization([RoleCode.ADMIN, RoleCode.USER]),
    validator(schema.param, ValidationSource.PARAM),
    userController.getOne
  )
  .put(
    authorization([RoleCode.ADMIN]),
    fileUploadHandler.handleSingleFileUpload('avatar'),
    validator(schema.param, ValidationSource.PARAM),
    validator(schema.update),
    userController.update
  )
  .delete(
    authorization([RoleCode.ADMIN]),
    validator(schema.param, ValidationSource.PARAM),
    userController.remove
  );

export default router;
