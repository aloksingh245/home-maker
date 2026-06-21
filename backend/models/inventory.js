const mongoose=require("mongoose");

const inventorySchema=new mongoose.Schema({
  householdid:{//forign key,
    type: mongoose.Schema.Types.ObjectId,
    ref:"household",
    required:true,
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
    type:String,
    required:true,
  }

},{timestamps:true});

module.exports=mongoose.model("inventory", inventorySchema);