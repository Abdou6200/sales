import IBonReduction, { BonReductionModel } from '../../model/BonReduction';

const findByObj = (obj: object): Promise<IBonReduction | null> => {
  return BonReductionModel.findOne(obj).exec();
};

export default findByObj;
