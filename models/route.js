const mongoose = require("mongoose")
const routeMarkerSchema = require("./routeMarker")

const routeSchema = new mongoose.Schema({
    name:{type:String,required:true},
    routeMarker:{type:routeMarkerSchema,required:true},
    startAddress:{type:String,default:""},
    endAddress:{type:String,default:""},
    totalDistance:{type:String,default:"0 km"},
    totalDuration:{type:String,default:"0 min"},
    calorie:{type:String,default:"0 kcal"},
    isFavorite:{type:Boolean,default:false},
    photos:{type:[String],default: [] }
})

const route = mongoose.model('Route',routeSchema);
module.exports = route;
