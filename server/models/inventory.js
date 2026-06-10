const mongoose=require("mongoose");

const inventorySchema=new mongoose.Schema({
  itemId:{
    type:String,
    requirde:true,
    unique:true,
  },
  itemName:{
    type:String,
    required:true,
  },
  itemQuantity:{
    type:Number,
    required:true,

  },
  itemUnit:{
    type:Number,
    required:true,
  }

},{timestamps:true});

module.exports=mongoose.model("inventory", inventorySchema);