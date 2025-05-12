import ICodePromo, { CodePromoModel } from '../../model/CodePromo';

const findByObj = (obj: object): Promise<ICodePromo | null> => {
  return CodePromoModel.findOne(obj).exec();
};

export default findByObj;
