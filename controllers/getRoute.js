const route = require("../models/route")

const getRoute = async (req,res)=>{

    try{
       const result = await route.find();
       res.status(201).json(result)
    }catch(err){
        res.status(404).json({message:err.message})
    }
}

const getRouteById= async(req,res)=>{

    const routeId = req.params.id;

    try{
       const result = await route.findById(routeId);
       if(route){
        res.status(200).json(result)
       }else{
        res.status(404).json({message:"Rota Bulunamadı"})
       }

    }catch(err){
        res.status(404).json({ message: err.message });
    }

}

module.exports = {
    getRoute,
    getRouteById,
};