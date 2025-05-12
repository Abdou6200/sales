import { Response } from 'express';
import asyncHandler from '../helpers/utils/asyncHandler';
import { ProtectedRequest } from '../types/app-request';
import userService from '../services/user';
import {
  SuccessMsgResponse,
  SuccessResponse,
  SuccessResponsePaginate,
} from '../core/ApiResponse';
import { log } from 'console';

export const create = asyncHandler(
  async (req: ProtectedRequest, res: Response) => {
    const { body, file } = req;
    console.log(body)
    const result = await userService.create({ body, file });
    new SuccessResponse('User created', result).send(res);
  }
);

export const getAll = asyncHandler(
  async (req: ProtectedRequest, res: Response) => {
    const { query } = req;
    const result = await userService.getAll(query);

    new SuccessResponsePaginate(
      'All users returned successfuly',
      result.docs,
      result.meta
    ).send(res);
  }
);

export const getOne = asyncHandler(
  async (req: ProtectedRequest, res: Response) => {
    const { id } = req.params;
    const { query } = req;
    const result = await userService.getOne(id, query);
    new SuccessResponse('User returned', result).send(res);
  }
);

export const update = asyncHandler(
  async (req: ProtectedRequest, res: Response) => {
    const { id } = req.params;
    const { body, file } = req;
    const result = await userService.update({ id, body, file });
    new SuccessResponse('User updated', result).send(res);
  }
);

export const remove = asyncHandler(
  async (req: ProtectedRequest, res: Response) => {
    const { id } = req.params;
    await userService.remove(id);
    new SuccessMsgResponse('User Deleted').send(res);
  }
);

export const getMe = asyncHandler(
  async (req: ProtectedRequest, res: Response) => {
    const { id } = req.user;
    const { query } = req;
    const result = await userService.getOne(id, query);
    new SuccessResponse('User returned', result).send(res);
  }
);

export const updateMe = asyncHandler(
  async (req: ProtectedRequest, res: Response) => {
    const { id } = req.user;
    const { body, file } = req;
    const result = await userService.update({ id, body, file });
    new SuccessResponse('User updated', result).send(res);
  }
);
