import mongoose from 'mongoose';

export let seedDelete = async () => {
  const collections = mongoose.modelNames();
  const deletedCollections = collections.map((collection) =>
    mongoose.models[collection].deleteMany({})
  );
  await Promise.all(deletedCollections);
  console.log('Collections empty successfuly ');
};
