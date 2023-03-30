const subCatServices = require("../services/subCategoryService");

exports.createSubCat = async(req,res,next)=>{
    try{
       let body = req.body;
       let result = await subCatServices.createSubCat(body);
       if(result){
        return res.status(result.status).send({sucess:result.sucess,message:result.message,data:result.result});
       }
    }
    catch(error){
        next(error);
    }
}