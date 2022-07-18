import mongoose from "mongoose";

async function createDBConnection() {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log("Db connected");
  } catch (err) {
    console.log(`DB Error: ${err}`);
  }
}

export { createDBConnection };
