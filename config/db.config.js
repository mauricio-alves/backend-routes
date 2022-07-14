const mongoose = require("mongoose");

async function connect() {
  try {
    const dbConnect = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to DB:", dbConnect.connection.name);
  } catch (error) {
    console.log("DB connection error", error);
  }
}

module.exports = connect;
