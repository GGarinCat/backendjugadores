const mongoose = require("mongoose");

const dbConnection = () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGODB_URI);
    console.log("Database online");
  } catch (error) {
    console.log(error);
    throw new Error("Error to connect to database");
  }
};

module.exports = {
  dbConnection,
};
