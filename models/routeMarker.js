const mongoose = require("mongoose")
const markerSchema = require("./marker")
const polylineSchema = require("./polyline")
const latLngSchema = require("./latLng")

const routeMarkerSchema = new mongoose.Schema({
        markers:{type:[markerSchema],required:true},
        polylines:{type:[polylineSchema],required:true},
        routePos:{type:[latLngSchema],required:true}    
})


module.exports = routeMarkerSchema;