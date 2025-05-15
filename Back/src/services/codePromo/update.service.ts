import CodePromoRepo from '../../database/repository/CodePromoRepo';
import PartnerRepo from '../../database/repository/PartnerRepo';
import { BadRequestError } from '../../core/ApiError';

interface updateParams {
  id: string;
  body: any;
  file?: Express.Request['file'];
}

export const update = async ({ id, body, file }: updateParams) => {
  const updateData = { ...body };

  // If file is uploaded, override picture
  if (file) {
    updateData.picture = file.path;
  }
  // If partner is changed, update the picture accordingly
  else if (body.partner) {
    const partnerDoc = await PartnerRepo.findById(body.partner);
    if (!partnerDoc) throw new BadRequestError('Partner not found');
    updateData.picture = partnerDoc.avatar;
  }

  const product = await CodePromoRepo.update(id, updateData);
  if (!product) throw new BadRequestError('Code Promo not found');
  return product;
};
