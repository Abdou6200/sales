import Joi from '@hapi/joi';

export default {
  loginAdmin: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required().required(),
  }),

  loginUser: Joi.object().keys({
    phoneNumber: Joi.string().required(),
    password: Joi.string().required().required(),
  }),

  refreshToken: Joi.object().keys({
    refreshToken: Joi.string().required().min(1),
  }),

  registerPhone: Joi.object().keys({
    phoneNumber: Joi.string().required(),
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
