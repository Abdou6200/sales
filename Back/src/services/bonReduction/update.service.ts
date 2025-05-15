import BonReductionRepo from '../../database/repository/BonReductionRepo';
import PartnerRepo from '../../database/repository/PartnerRepo';
import { BadRequestError } from '../../core/ApiError';

interface updateParams {
  id: string;
  body: any;
  file?: Express.Request['file'];
}

export const update = async ({ id, body, file }: updateParams) => {
  let updateData = { ...body };

  if (file) {
    updateData.picture = file.path;
  } else if (body.partner) {
    const partnerDoc = await PartnerRepo.findById(body.partner);
    if (!partnerDoc) throw new BadRequestError('Partner not found');
    updateData.picture = partnerDoc.avatar;
  }

  const product = await BonReductionRepo.update(id, updateData);
  if (!product) throw new BadRequestError('Bon Reduction not found');

  return product;
};
