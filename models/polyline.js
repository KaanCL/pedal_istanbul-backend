const mongoose = require("mongoose")
const latLngSchema = require("./latLng")

const polylineSchema = new mongoose.Schema({
      points:[latLngSchema],
})

module.exports = polylineSchema;