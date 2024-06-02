const mongoose = require("mongoose");
const config = require("config");
const logger = require("../middleware/logger");


exports.db = function async(callback) {

  //sgh
  let db = ""
  let environment_name = config.get("environment_name")
  if (environment_name === "local") {
    db = config.get("db");
  }
  if (environment_name === "server") {
    db = config.get("db_SERVER");
    console.log(3, db);
  }


  try {
    mongoose.set('strictQuery', false);
    await mongoose
      .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000,
        authSource: "admin"
      })
      .then(() => {
        logger.info(`connected to database`);
        if (callback != null) {
          callback();
        }
      });
    console.log('Successfully connected to MongoDB');
  } catch (error) {
    if (error instanceof mongoose.Error.MongooseServerSelectionError) {
      console.error(100, 'MongooseServerSelectionError:', error.message);
    } else {
      console.error(200, 'Unexpected Error:', error);
    }
    process.exit(1); // Exit process with failure code
  }




};
