import IPartner, { PartnerModel } from '../../model/Partner';

const create = async (obj: Partial<IPartner>): Promise<IPartner> => {
  return await PartnerModel.create(obj);
};

export default create;
