const mongoose = require("mongoose")

const latLngSchema = new mongoose.Schema({
      lat:{type:Number,required:true},
      lng:{type:Number,required:true}
});

module.exports = latLngSchema;