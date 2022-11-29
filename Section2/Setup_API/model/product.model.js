const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({Product_id: Schema.Types.ObjectId});
const Product = mongoose.model('Product', schema);

module.exports={Product}