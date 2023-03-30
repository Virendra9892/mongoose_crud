const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
   categoryName:{
      type:String
   },
   isActive:{
      type:Boolean,
      default:true
   }
})

const category = mongoose.model("category",categorySchema)
module.exports = category;