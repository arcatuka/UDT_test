const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({personal_id: Schema.Types.ObjectId ,name:'String',address:'String',email:'String',gender:'String'});
const Personal = mongoose.model('Personal', schema);

module.exports={Personal}