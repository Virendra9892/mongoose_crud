const mongoose = require("mongoose");
// const subCategory = require("./subCategorySchema");

const productSchema = new mongoose.Schema({
     productName:{
        type:String,
      //   required:true,
      //   unique:true
     },
     description:{
        type:String,
      //   required:true,
      //   unique:true
     },
     price:{
        type:Number,
      //   required:true
     },
     isActive:{
        type:Number,
        default:true
     },
     productImgPath:{
        type:String,
     },
     brandId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"brand"    
     }, 
     subCatId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"subCategory"
     }
})

const product = mongoose.model("product",productSchema)
module.exports = product;