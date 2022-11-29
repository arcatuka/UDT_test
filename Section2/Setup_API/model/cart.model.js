const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({cart_id: Schema.Types.ObjectId});
const Cart = mongoose.model('Cart', schema);

module.exports={Cart}