import IPartner, { PartnerModel } from '../../model/Partner';

const findOneWithObjFull = (obj: object): Promise<IPartner | null> => {
  return PartnerModel.findOne(obj).select('+password').exec();
};

export default findOneWithObjFull;
