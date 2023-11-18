const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI.toString(), {
      useunifiedtopology: true,
      usenewurlparser: true,
    });
    console.log("Successfully connected ");
  } catch (error) {
    console.log(`can not connect to database, ${error}`);
    process.exit(1);
  }
};
module.exports = connectDB;
