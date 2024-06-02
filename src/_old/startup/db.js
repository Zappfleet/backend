import { set, connect } from "mongoose";
import { get } from "config";
import { info } from "../middleware/logger";


export function db (callback) {

  //sgh
  let db = ""
  let environment_name = get("environment_name")
  if (environment_name === "local") {
    db = get("db");
  }
  if (environment_name === "server") {
    db = get("db_SERVER");
  }
  set('strictQuery', false);
  connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000,
      authSource: "admin"
    })
    .then(() => {
      info(`connected to database`);
      if (callback != null) {
        callback();
      }
    });


}
