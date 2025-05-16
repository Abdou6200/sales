import { Response } from 'express';
import asyncHandler from '../helpers/utils/asyncHandler';
import { ProtectedRequest } from '../types/app-request';
import partnerService from '../services/partner';
import {
  SuccessMsgResponse,
  SuccessResponse,
  SuccessResponsePaginate,
} from '../core/ApiResponse';

export const create = asyncHandler(
  async (req: ProtectedRequest, res: Response) => {
    const { body, file } = req;
    const result = await partnerService.create({ body, file });
    new SuccessResponse('Partner created', result).send(res);
  }
);

export const getAll = asyncHandler(
  async (req: ProtectedRequest, res: Response) => {
    const { query } = req;
    const result = await partnerService.getAll(query);

    new SuccessResponsePaginate(
      'All Partners returned successfully',
      result.docs,
      result.meta
    ).send(res);
  }
);

export const getOne = asyncHandler(
  async (req: ProtectedRequest, res: Response) => {
    const { id } = req.params;
    const { query } = req;
    const result = await partnerService.getOne(id, query);
    new SuccessResponse('Partner returned', result).send(res);
  }
);

export const update = asyncHandler(
  async (req: ProtectedRequest, res: Response) => {
    const { id } = req.params;
    const { body, file } = req;
    const result = await partnerService.update({ id, body, file });
    new SuccessResponse('Partner updated', result).send(res);
  }
);

export const remove = asyncHandler(
  async (req: ProtectedRequest, res: Response) => {
    const { id } = req.params;
    await partnerService.remove(id);
    new SuccessMsgResponse('Partner Deleted').send(res);
  }
);

export const getMe = asyncHandler(
  async (req: ProtectedRequest, res: Response) => {
    const { id } = req.user;
    const { query } = req;
    const result = await partnerService.getOne(id, query);
    new SuccessResponse('Partner returned', result).send(res);
  }
);

export const updateMe = asyncHandler(
  async (req: ProtectedRequest, res: Response) => {
    const { id } = req.user;
    const { body, file } = req;
    const result = await partnerService.update({ id, body, file });
    new SuccessResponse('Partner updated', result).send(res);
  }
);
