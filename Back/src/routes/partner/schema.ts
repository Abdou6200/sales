import Joi from '@hapi/joi';
import { JoiObjectId } from '../../helpers/utils/validator';

export default {
  param: Joi.object().keys({
    id: JoiObjectId().required(),
  }),

  create: Joi.object().keys({
    companyName: Joi.string().min(2).max(200).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    phoneNumber: Joi.string()
      .pattern(
        /^(2[0-9]{7}|9[0-9]{7}|4[0-9]{7}|5[0-9]{7}|7[0-9]{7})$/,
        'numbers'
      )
      .required(),
    city: Joi.string().min(3).max(100).required(),
    category: JoiObjectId().required(),
    avatar: Joi.string().uri().optional(),
  }),

  update: Joi.object().keys({
    companyName: Joi.string().min(2).max(200),
    email: Joi.string().email(),
    phoneNumber: Joi.string()
      .pattern(
        /^(2[0-9]{7}|9[0-9]{7}|4[0-9]{7}|5[0-9]{7}|7[0-9]{7})$/,
        'numbers'
      ),
    city: Joi.string().min(3).max(100),
    category: JoiObjectId(),
    avatar: Joi.string().uri().optional(),
  }),
};
