import ICodePromo, { CodePromoModel } from '../../model/CodePromo';

const create = async (obj: Partial<ICodePromo>): Promise<ICodePromo> => {
  return await CodePromoModel.create(obj);
};

export default create;
