const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({transaction_id: Schema.Types.ObjectId });
const Transaction = mongoose.model('Transaction', schema);

module.exports={Transaction}