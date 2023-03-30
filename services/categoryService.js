const category = require("../models/categorySchema");


exports.createCategory = async(data)=>{
    // let 
      let result = await category.create(data);
      if(result){
        return ({status:200,sucess:true,message:"category created sucessfully",data:result})
      }
}