const route = require("../models/route")


const deleteRoute = async (req,res)=>{

    const routeId = req.params.id

    try{

        const result = await route.findByIdAndDelete(routeId);

        if(result){
            res.status(200).json({message:"Rota başarıyla silindi" , result});
        }else{
            res.status(404).json({message:"Rota bulunamadı"});
        }


    }catch(err){
        res.status(500).json({ message: err.message });
    }

}

module.exports = deleteRoute