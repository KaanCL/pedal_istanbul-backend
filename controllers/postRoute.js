const route = require("../models/route")


const postRoute = async (req,res)=>{

    try{
        console.log("Body",req.body);
        const{
              name,
              routeMarker,
              startAddress,
              endAddress,
              totalDistance,
              totalDuration,
              calorie,
              isFavorite,
              photos
           } = req.body;


        const newRoute = new route({
            name,
            routeMarker,
            startAddress,
            endAddress,
            totalDistance,
            totalDuration,
            calorie,
            isFavorite,
            photos,
        });

        await newRoute.save();        
        res.status(201).json({ message: "Rota başarıyla oluşturuldu!", data: newRoute });
    }
    catch(err){
        console.error("Hata:", err);
        res.status(500).json({ error: "Bir hata oluştu!" });
    }


}


module.exports = postRoute;