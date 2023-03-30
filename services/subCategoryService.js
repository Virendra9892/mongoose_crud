const subCat = require("../models/subCategorySchema");

exports.createSubCat = async(data)=>{
    let exist = await subCat.findOne({subCatName:data.subCatName});
    if(exist){
        return ({status:403,sucess:false,message:"subacat already exist"});
    }
    let data1 = await subCat.create(data);
    if(data1){
        return ({status:200,sucess:true,message:"subcat created sucessfuly",result:data1});
    }
}