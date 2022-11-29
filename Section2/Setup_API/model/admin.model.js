const mongoose = require("mongoose")
const Schema = mongoose.Schema
const schema = new Schema({ admin_name:"String", Agency: { type: Schema.Types.Array, ref: 'Agency' }})
const Admin = mongoose.model('Admin', schema);

module.exports={Admin}