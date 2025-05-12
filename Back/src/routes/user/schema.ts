import Joi from '@hapi/joi';
import { JoiObjectId } from '../../helpers/utils/validator';

export default {
  param: Joi.object().keys({
    id: JoiObjectId().required(),
  }),

  create: Joi.object().keys({
    userName: Joi.string().min(3).max(200).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    phoneNumber: Joi.string()
      .pattern(
        /^(2[0-9]{7}|9[0-9]{7}|4[0-9]{7}|5[0-9]{7}|7[0-9]{7})$/,
        'numbers'
      )
      .required(),
    age: Joi.number().min(13),
    avatar: Joi.string(),
  }),

  update: Joi.object().keys({
    userName: Joi.string().min(3).max(200),
    email: Joi.string().email(),
    phoneNumber: Joi.string().pattern(
      /^(2[0-9]{7}|9[0-9]{7}|4[0-9]{7}|5[0-9]{7}|7[0-9]{7})$/,
      'numbers'
    ),
    age: Joi.number().min(13),
    avatar: Joi.string().uri().optional(),
  }),
};
