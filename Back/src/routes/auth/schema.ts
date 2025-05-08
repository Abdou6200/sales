import Joi from '@hapi/joi';
import { email } from 'configVars';
import { name } from 'ejs';

export default {
  loginAdmin: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required().required(),
  }),

  loginUser: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required().required(),
  }),

  refreshToken: Joi.object().keys({
    refreshToken: Joi.string().required().min(1),
  }),

  registerUser: Joi.object().keys({
    userName: Joi.string().min(3).max(200).required(),
    email: Joi.string().email().required(),
    age: Joi.number().required(),
    phoneNumber: Joi.string()
        .pattern(/^(2[0-9]{7}|9[0-9]{7}|4[0-9]{7}|5[0-9]{7}|7[0-9]{7})$/,
          'numbers')
        .required(),
    password: Joi.string().min(5).max(30).required(),
  }),

  forgetPhone: Joi.object().keys({
    phoneNumber: Joi.string().required(),
  }),

  verifyRegisterPhone: Joi.object().keys({
    phoneNumber: Joi.string().required(),
    registerConfirmationCode: Joi.number().required(),
  }),

  verifyForgetPassword: Joi.object().keys({
    phoneNumber: Joi.string().required(),
    forgetConfirmationCode: Joi.number().required(),
  }),

  setCredentials: Joi.object().keys({
    phoneNumber: Joi.string().required(),
    registerConfirmationCode: Joi.number().required(),
    userName: Joi.string().min(3).required(),
    password: Joi.string().min(8).required(),
    confirmPassword: Joi.string().min(8).required(),
  }),

  setPAssword: Joi.object().keys({
    phoneNumber: Joi.string().required(),
    forgetConfirmationCode: Joi.number().required(),
    password: Joi.string().min(8).required(),
    confirmPassword: Joi.string().min(8).required(),
  }),
};
