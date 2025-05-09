import { Response } from 'express';
import asyncHandler from '../helpers/utils/asyncHandler';
import { ProtectedRequest } from '../types/app-request';
import productService from '../services/product';
import {
  SuccessMsgResponse,
  SuccessResponse,
  SuccessResponsePaginate,
} from '../core/ApiResponse';

export const create = asyncHandler(
  async (req: ProtectedRequest, res: Response) => {
    const { body, file } = req;
    const result = await productService.create({ body, file });
    new SuccessResponse('Product created', result).send(res);
  }
);

export const getAll = asyncHandler(
  async (req: ProtectedRequest, res: Response) => {
    const { query } = req;
    const result = await productService.getAll(query);

    new SuccessResponsePaginate(
      'All products returned successfuly',
      result.docs,
      result.meta
    ).send(res);
  }
);

export const getOne = asyncHandler(
  async (req: ProtectedRequest, res: Response) => {
    const { id } = req.params;
    const { query } = req;
    const result = await productService.getOne(id, query);
    new SuccessResponse('Product returned', result).send(res);
  }
);

export const update = asyncHandler(
  async (req: ProtectedRequest, res: Response) => {
    const { id } = req.params;
    const { body, file } = req;
    const result = await productService.update({ id, body, file });
    new SuccessResponse('Product updated', result).send(res);
  }
);

export const remove = asyncHandler(
  async (req: ProtectedRequest, res: Response) => {
    const { id } = req.params;
    await productService.remove(id);
    new SuccessMsgResponse('Product Deleted').send(res);
  }
);
