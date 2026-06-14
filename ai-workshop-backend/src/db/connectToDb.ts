import mongoose from "mongoose";

const connectToDb: () => Promise<void> = async () => {
  const connectionURI: string = process.env.MONGODB_URI as string;

  try {
    const connection = await mongoose.connect(connectionURI);
    console.log(`Connected to MongoDB: ${connection.connection.name}`);
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }
  
};

export default connectToDb;
