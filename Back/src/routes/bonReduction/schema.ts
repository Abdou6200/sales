import Joi from '@hapi/joi';
import { JoiObjectId } from '../../helpers/utils/validator';

export default {
  param: Joi.object().keys({
    id: JoiObjectId().required(),
  }),

  create: Joi.object().keys({
    title: Joi.string().min(3).max(200).required(),
    code: Joi.string().min(3).max(200).required(),
    remise: Joi.string().min(3).max(200).required(),
    duree: Joi.date().required(),
    picture: Joi.string().uri().required(),
    description: Joi.string().min(3).max(400).required(),
  }),

  update: Joi.object().keys({
    title: Joi.string().min(3).max(200),
    code: Joi.string().min(3).max(200),
    remise: Joi.string().min(3).max(200),
    duree: Joi.date(),
    picture: Joi.string().uri(),
    description: Joi.string().min(3).max(400),
  }),
};
