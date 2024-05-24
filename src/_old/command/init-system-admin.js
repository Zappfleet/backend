const mongoose = require("mongoose");
const { defaultPermitions } = require("../global_values/default_permissions");
const roles = require("../global_values/roles");
const { Account } = require("../modules/auth/model");
const { User } = require("../modules/user/model");
const config = require("config");

async function run() {

    const db = config.get("db");
    await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, });

    const user = await User.create({
        full_name: "مدیر سیستم",
        nat_num: "0",
        phone_num: "0",
        emp_num: "0",
        role: roles.admin,
        permissions: defaultPermitions["admin"],
    });
    await Account.create({
        username: "system",
        password: "system",
        user_id: user._id,
        role: roles.admin,
    });
    console.log("Success");
}
run();