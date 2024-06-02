const mongoose = require("mongoose");
const config = require("config");
const logger = require("../middleware/logger");


exports.db = function (callback) {

  //sgh
  let db = ""
  let environment_name = config.get("environment_name")
  if (environment_name === "local") {
    db = config.get("db");
  }
  if (environment_name === "server") {
    db = config.get("db_SERVER");
  }
  mongoose.set('strictQuery', false);
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000,
      authSource: admin
    })
    .then(() => {
      logger.info(`connected to database`);
      if (callback != null) {
        callback();
      }
    });


};
