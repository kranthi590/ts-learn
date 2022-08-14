import mongoose from 'mongoose';

export default async () => {
  const url = process.env.MONGO_URI;
  if (!url) {
    console.error('Mongodb URL invalid');
    return process.exit(1);
  }
  try {
    await mongoose.connect(url);
    return console.info(`Successfully connected to ${url}`);
  } catch (error) {
    console.error('Error connecting to database: ', error);
    return process.exit(1);
  }
  // mongoose.connection.on('disconnected', connect);
};
