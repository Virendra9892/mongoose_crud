const brandService = require("../services/brandService");

exports.createBrand = async(req,res,next)=>{
    try{
       let body = req.body;
       let result = await brandService.createBrand(body);
       if(result){
        return res.status(result.status).send({sucess:result.sucess,message:result.message,data:result.data})
       }
    }
    catch(error){
        next(error);
    }
}