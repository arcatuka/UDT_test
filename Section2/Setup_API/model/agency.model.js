const mongoose = require("mongoose")
const Schema = mongoose.Schema
const schema = new Schema({ name:"String", personal_information: { type: Schema.Types.Array, ref: 'Personal' }, product: { type: Schema.Types.Array, ref: 'Product' }, transaction: { type: Schema.Types.Array, ref: 'Transaction' }, billing: { type: Schema.Types.Array, ref: 'Billing' }});
const Agency = mongoose.model('Agency', schema);

module.exports={Agency}