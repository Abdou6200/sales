import express from 'express';
import * as messageController from '../../controllers/message.controller';
import validator, { ValidationSource } from '../../helpers/utils/validator';
import schema from './schema';

const router = express.Router();

router
  .route('/')
  .post(
    validator(schema.create),
    messageController.create
  )

export default router;
