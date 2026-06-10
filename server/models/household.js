const mongoose=require("mongoose");

const houseHoldSchema=new mongoose.Schema({
  id:{
    type:String,
    requirde:true,
    unique:true,
  },
  Name:{
    type:String,
    required:true,
  },
},{timestamps:true});

module.exports=mongoose.model("household", houseHoldSchema);