const express = require("express")
const postRoute = require("../controllers/postRoute")


const router = express.Router();


router.post("/",postRoute)



module.exports = router
