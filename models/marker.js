const mongoose = require("mongoose")
const latLngSchema = require("./latLng")

const markerSchema = new mongoose.Schema({
      position:latLngSchema,
      type:{type:Boolean,default:false,required:true,},  
})

module.exports = markerSchema;