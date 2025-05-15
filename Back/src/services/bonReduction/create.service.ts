import { BadRequestError } from '../../core/ApiError';
import BonReductionRepo from '../../database/repository/BonReductionRepo';
import PartnerRepo from '../../database/repository/PartnerRepo';

interface createParams {
  body: any;
  file?: Express.Request['file'];
}

export const create = async ({ body, file }: createParams) => {
  const { partner, ...rest } = body;

  const partnerDoc = await PartnerRepo.findById(partner);
  if (!partnerDoc) throw new BadRequestError('Partner not found');

  const bonToCreate = {
    ...rest,
    partner: partnerDoc._id,
    picture: file ? file.path : partnerDoc.avatar,
  };

  const product = await BonReductionRepo.create(bonToCreate);
  if (!product) throw new BadRequestError('Error creating Bon Reduction');

  return product;
};
