import { ProtectedRequest } from 'app-request';
import { AuthFailureError } from '../core/ApiError';
import asyncHandler from '../helpers/utils/asyncHandler';
import IRole, { RoleCode } from '../database/model/Role';

export default (roles: RoleCode[]) =>
  asyncHandler(async (req: ProtectedRequest, res, next) => {
    if (!req.user || !req.user.role)
      throw new AuthFailureError('Permission denied');
    const userRoleCode = (req.user.role as IRole).code as RoleCode;
    if (roles.includes(userRoleCode)) return next();
    throw new AuthFailureError('Permission denied');
  });
