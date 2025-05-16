import express from 'express';
import FileUploadHandler from '../../helpers/fileUpload';
import authentication from '../../authUtils/authentication';
import * as partnerController from '../../controllers/partner.controller';
import validator, { ValidationSource } from '../../helpers/utils/validator';
import schema from './schema';
import authorization from '../../authUtils/authorization';
import { RoleCode } from '../../database/model/Role';

const fileUploadHandler = new FileUploadHandler();
const router = express.Router();

router.get('/', partnerController.getAll);

router.use(authentication);

router.post(
  '/',
  authorization([RoleCode.ADMIN]),
  validator(schema.create),
  // fileUploadHandler.handleSingleFileUpload('avatar'),
  partnerController.create
);

router
  .route('/me')
  .get(authorization([RoleCode.ADMIN, RoleCode.USER]), partnerController.getMe)
  .put(
    authorization([RoleCode.ADMIN, RoleCode.USER]),
    fileUploadHandler.handleSingleFileUpload('avatar'),
    validator(schema.update),
    partnerController.updateMe
  );

router
  .route('/:id')
  .get(
    authorization([RoleCode.ADMIN, RoleCode.USER]),
    validator(schema.param, ValidationSource.PARAM),
    partnerController.getOne
  )
  .put(
    authorization([RoleCode.ADMIN]),
    fileUploadHandler.handleSingleFileUpload('avatar'),
    validator(schema.param, ValidationSource.PARAM),
    validator(schema.update),
    partnerController.update
  )
  .delete(
    authorization([RoleCode.ADMIN]),
    validator(schema.param, ValidationSource.PARAM),
    partnerController.remove
  );

export default router;
