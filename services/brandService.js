const brand = require("../models/brandSchema");

exports.createBrand = async(data)=>{
    let exist = await brand.findOne({brandName:data.brandName});
    if(exist){
        return ({status:403,sucess:false,message:"brand already exist"});
    }
    let result = await brand.create(data)
    if(result){
        return ({status:200,sucess:true,message:"brand created sucessfully",data:result});
    }
}