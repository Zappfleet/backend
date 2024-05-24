const mongoose = require("mongoose");
const config = require("config");
const logger = require("../middleware/logger");


exports.db = function (callback) {

  //sgh
  const db = config.get("db");
  const db_server = config.get("db_SERVER");
  mongoose.set('strictQuery', false);
  mongoose
    .connect(db_server, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      logger.info(`connected to database`);
      if (callback != null) {
        callback();
      }
    });


};
