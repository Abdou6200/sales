import express from 'express';
import FileUploadHandler from '../../helpers/fileUpload';
import authentication from '../../authUtils/authentication';
import * as menuController from '../../controllers/menu.controller';
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
    menuController.create
  )
  .get(menuController.getAll);

router.route('/home').get(menuController.getMenusForHome);

router
  .route('/:id')
  .get(validator(schema.param, ValidationSource.PARAM), menuController.getOne)
  .put(
    authentication,
    authorization([RoleCode.ADMIN]),
    fileUploadHandler.handleSingleFileUpload('picture'),
    validator(schema.param, ValidationSource.PARAM),
    validator(schema.update),
    menuController.update
  )
  .delete(
    authentication,
    authorization([RoleCode.ADMIN]),
    validator(schema.param, ValidationSource.PARAM),
    menuController.remove
  );

export default router;
