import { BadRequestError } from '../../core/ApiError';
import CodePromoRepo from '../../database/repository/CodePromoRepo';
import PartnerRepo from '../../database/repository/PartnerRepo';

interface createParams {
  body: any;
  file?: Express.Request['file'];
}

export const create = async ({ body, file }: createParams) => {
  const { partner, ...rest } = body;

  // Fetch the partner
  const partnerDoc = await PartnerRepo.findById(partner);
  if (!partnerDoc) throw new BadRequestError('Partner not found');

  // Build the final object with partner's avatar
  const newCodePromo = {
    ...rest,
    partner: partnerDoc._id,
    picture: file ? file.path : partnerDoc.avatar,
  };

  const product = await CodePromoRepo.create(newCodePromo);
  if (!product) throw new BadRequestError('Error creating Code Promo');
  return product;
};
