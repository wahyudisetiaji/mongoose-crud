const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const customerSchema = new Schema({
    name: String,
    memberid: String,
    address: String,
    zipcode: Number,
    phone: Number,
})

var Customers = mongoose.model('Customers', customerSchema)

module.exports = Customers