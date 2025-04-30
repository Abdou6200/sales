import IMessage, { MessageModel } from '../../model/Message';

const create = async (obj: Partial<IMessage>): Promise<IMessage> => {
  return await MessageModel.create(obj);
};

export default create;
