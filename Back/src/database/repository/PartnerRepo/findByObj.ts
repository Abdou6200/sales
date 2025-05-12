import IPartner, { PartnerModel } from '../../model/Partner';

const findByObj = (obj: object): Promise<IPartner | null> => {
  return PartnerModel.findOne(obj).exec();
};

export default findByObj;
