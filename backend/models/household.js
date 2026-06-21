const mongoose=require("mongoose");

const houseHoldSchema=new mongoose.Schema({
  Name:{
    type:String,
    required:true,
  },
},{timestamps:true});

module.exports=mongoose.model("household", houseHoldSchema);