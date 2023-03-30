const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
    subCatName:{
        type:String
    },
    catId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
    }
})

const subCategory = mongoose.model("subCategory",subCategorySchema);
module.exports = subCategory;