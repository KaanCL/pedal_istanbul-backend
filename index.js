const express = require("express")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const routeRouter = require("./routes/route")


const app = express();
dotenv.config();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))



const port = process.env.PORT || 5000


app.get("/",(req,res)=>{
    res.send("Nodejs server is running");
})


app.use("/route",routeRouter)





mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running ${port}`)})
    })
    .catch(err =>{
        console.log('MongoDB bağlantısı hatası:', err);
    })

