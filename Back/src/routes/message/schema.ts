import Joi, { required } from '@hapi/joi';
import { JoiObjectId } from '../../helpers/utils/validator';
import { email } from 'configVars';

export default {
  param: Joi.object().keys({
    id: JoiObjectId().required(),
  }),

  create: Joi.object().keys({
      name: Joi.string().min(3).max(200).required(),
      phone: Joi.string()
        .pattern(
          /^(2[0-9]{7}|9[0-9]{7}|4[0-9]{7}|5[0-9]{7}|7[0-9]{7})$/,
          'numbers'
        )
        .required(),
        email: Joi.string().email().required(),
        message: Joi.string().min(3).max(300).required(),
    }),
};
