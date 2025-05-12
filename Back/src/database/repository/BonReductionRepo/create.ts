import IBonReduction, { BonReductionModel } from '../../model/BonReduction';

const create = async (obj: Partial<IBonReduction>): Promise<IBonReduction> => {
  return await BonReductionModel.create(obj);
};

export default create;
