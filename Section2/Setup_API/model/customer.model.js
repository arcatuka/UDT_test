const mongoose = require("mongoose")
const Schema = mongoose.Schema
const schema = new Schema({personal_information: { type: Schema.Types.ObjectId, ref: 'Personal' }, Cart: { type: Schema.Types.Array, ref: 'Cart' }, transaction: { type: Schema.Types.Array, ref: 'Transaction' }, billing: { type: Schema.Types.Array, ref: 'Billing' } });
const Customer = mongoose.model('Customer', schema);

module.exports={Customer}