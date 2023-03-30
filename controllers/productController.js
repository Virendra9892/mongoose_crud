const productServices = require("../services/productService");

exports.addProduct = async(req,res,next)=>{
    let body = req.body;
    let result = await productServices.createProduct(body);
    if(result){
        return res.status(result.status).send({sucess:result.sucess,mesage:result.message,data:result.data})
    }
}

exports.getProduct = async(req,res,next)=>{
    let page = req.query.page;
    let limit = req.query.limit;
    let result = await productServices.findProduct(page,limit);
    if(result){
        return res.status(result.status).send({sucess:result.sucess,message:result.message,count:result.count,data:result.data,})
    }
}

exports.getProductById = async(req,res,next)=>{
    let id = req.params.id;
    let result = await productServices.getProductById(id);
    if(result){
        return res.status(result.status).send({sucess:result.sucess,message:result.message,result:result.data})
    }
}

exports.getProductByQuery = async(req,res,next)=>{
    let sortField = req.query.sortField;
    let orderBy = req.query.orderBy;
    let result = await productServices.findProductByQuery(sortField,orderBy);
    if(result){
        return res.status(result.status).send({sucess:result.sucess,message:result.message,data:result.data})
    }
}

exports.getProductBylookup = async(req,res,next)=>{
    let result = await productServices.getProductByLookup();
    if(result){
        return res.status(result.status).send({sucess:result.sucess,count:result.data1,message:result.message,data:result.data})
    }
}