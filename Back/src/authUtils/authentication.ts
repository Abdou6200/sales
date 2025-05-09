import express from 'express';
import { ProtectedRequest } from 'app-request';
import UserRepo from '../database/repository/UserRepo';
import {
  AuthFailureError,
  AccessTokenError,
  TokenExpiredError,
} from '../core/ApiError';
import JWT from '../core/JWT';
import KeystoreRepo from '../database/repository/KeystoreRepo';
import { Types } from 'mongoose';
import { getAccessToken, validateTokenData } from './authUtils';
import validator, { ValidationSource } from '../helpers/utils/validator';
import schema from './schema';
import asyncHandler from '../helpers/utils/asyncHandler';

const router = express.Router();

export default router.use(
  validator(schema.auth, ValidationSource.HEADER),
  asyncHandler(async (req: ProtectedRequest, res, next) => {
    req.accessToken = getAccessToken(req.headers.authorization); // Express headers are auto converted to lowercase
    let user: any;
    try {
      const payload = await JWT.validate(req.accessToken);
      validateTokenData(payload);
      user = await UserRepo.findById(payload.sub, {
        populate: 'role:code',
      });
      if (!user) throw new AuthFailureError('User not registered');
      req.user = user;

      const keystore = await KeystoreRepo.findforKey(req.user.id, payload.prm);
      if (!keystore) throw new AuthFailureError('Invalid access token');
      req.keystore = keystore;

      return next();
    } catch (e) {
      if (e instanceof TokenExpiredError) throw new AccessTokenError(e.message);
      throw e;
    }
  })
);
