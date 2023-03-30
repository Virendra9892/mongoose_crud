const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
    brandName:{
        type:String
    },
    isActive:{
        type:Boolean,
        default:true
    }
});

const brand = mongoose.model("brand",brandSchema);

module.exports = brand;