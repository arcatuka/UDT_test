const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({billing_id: Schema.Types.ObjectId});
const Billing = mongoose.model('Billing', schema);

module.exports={Billing}