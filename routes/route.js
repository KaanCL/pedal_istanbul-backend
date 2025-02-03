const express = require("express")
const {getRoute,getRouteById} = require("../controllers/getRoute")
const postRoute = require("../controllers/postRoute")
const deleteRoute = require("../controllers/deleteRoute")

const router = express.Router();


router.get("/",getRoute)
router.get("/:id",getRouteById)
router.post("/",postRoute)
router.delete("/delete/:id",deleteRoute)



module.exports = router
