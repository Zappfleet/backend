
const moment = require("moment");
const mongoose = require("mongoose");

const systeminactiveSchema = new mongoose.Schema({
    title: String,
    status: String,
    start_date: String,
    end_date: String,
    inactive_permissions: [String]
});

// Create a Mongoose model for the "systeminactive" collection
const SystemInactive = mongoose.model('SystemInactive', systeminactiveSchema, 'systeminactive');


async function insert_InactiveSystem(req, res) {
    try {
        // // Validate item
        // if (!item || !item.start_date || !item.end_date || !Array.isArray(item.inactive_permissions)) {
        //     throw new Error('Invalid item format');
        // }

        const item = req.body;
        const systemInactive = new SystemInactive(item)
        console.log(7000, req.body, item, systemInactive);
        const result = await systemInactive.save();

        return res.status(200).send({
            status: 200,
            data: item
        });

    } catch (error) {
        console.error(6000);
        return res.status(500).send({
            status: 500,
            error: error.message
        });
    }
}

async function select_InactiveSystem(req, res) {
    try {

        const result = await SystemInactive.find({})
        return res.status(200).send({
            status: 200,
            data: result
        });

    } catch (error) {
        console.error(6000);
        return res.status(500).send({
            status: 500,
            error: error.message
        });
    }
}

async function delete_InactiveSystem(req, res) {
    try {
        //console.log(700, req.params.id);
        const result = await SystemInactive.deleteOne({ _id: req.params.id });
        res.status(result.status || 200).send(result);
        return res.status(200).send({
            status: 200,
            data: req.params.id
        });

    } catch (error) {
        console.error(6000);
        return res.status(500).send({
            status: 500,
            error: error.message
        });
    }
}

async function update_InactiveSystem(req, res) {
    try {
        const id = req.params.id;
        let item = req.body;
        delete item._id;
        const result = await SystemInactive.findByIdAndUpdate(id, item, { new: true });
        console.log(800, result);

        console.log(900, item, id);
        return res.status(200).send({
            status: 200,
            data: req.body
        });

    } catch (error) {
        console.error(6000);
        return res.status(500).send({
            status: 500,
            error: error.message
        });
    }
}

module.exports = {
    insert_InactiveSystem,
    select_InactiveSystem,
    delete_InactiveSystem,
    update_InactiveSystem
};


