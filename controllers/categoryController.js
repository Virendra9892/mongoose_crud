const categoryService = require("../services/categoryService");

exports.addCategory = async(req,res,next)=>{
    let body = req.body;
    let result = await categoryService.createCategory(body);
    if(result){
        return res.status(result.status).send({sucess:result.sucess,message:result.message,data:result.data})
    }
}