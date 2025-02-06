const route = require("../models/route")

const updateRoute = async (req,res)=>{

    try{
        const routeId = req.params.id;

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

         const updatedRoute = await route.findByIdAndUpdate(routeId,{
            name,
            routeMarker,
            startAddress,
            endAddress,
            totalDistance,
            totalDuration,
            calorie,
            isFavorite,
            photos,
         },
        )

        if (!updatedRoute) {
            return res.status(404).json({ message: "Route not found" });
          }

          res.status(200).json(updatedRoute);
    }
    catch(err){
        console.error(err);
        res.status(500).json({ message: "Server error", err });
    }


}


const updateFavoriteRoute = async (req,res) => {

    try{
        const { id } = req.params; 

    
        const updatedRoute = await route.findByIdAndUpdate(
          id, 
          { $set: { isFavorite: { $not: "$isFavorite" } } }, 
          { new: true } 
        );
    
        if (!updatedRoute) {
          return res.status(404).json({ message: "Route not found" });
        }

        res.status(200).json(updatedRoute);


    }catch(err){
       console.log(err);
       res.status(500).json({ message: "Server error", err });
    }


}

module.exports = {updateRoute , updateFavoriteRoute,}