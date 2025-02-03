const mongoose = require("mongoose")
const latLngSchema = require("./latLng")

const markerSchema = new mongoose.Schema({
      position:latLngSchema,
})

module.exports = markerSchema;