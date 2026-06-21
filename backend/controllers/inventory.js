const express=require("express");

const inventryoryData=require("../models/inventory");
const household = require("../models/household");


//post
async function addInventoryItem(req,res) {
  const body=req.body;

  if (!body.householdid || !body.itemName || !body.itemQuantity || !body.itemUnit  ) return res.status(400).json({error:"data is not appropriate please provide the desired data"});
  const existingItem=await inventryoryData.findOne({householdid:body.householdid,itemName:body.itemName});
  if(existingItem) return res.status(409).json({ error: "Duplicate item name inside this household" });
  await inventryoryData.create({
     householdid:body.householdid,
     itemName: body.itemName,
     itemQuantity:body.itemQuantity,
     itemUnit:body.itemUnit,

  })
  res.status(200).json({status:"data saved to db"});
  
}

//get
async function getInventory(req,res) {
  const id=req.params.id;
  const data= await inventryoryData.find({householdid:id});
  return res.status(200).json({data});  
}


//patch

async function editInventory(req,res){
  const itemId = req.params.id;
  const body=req.body;
  if (!body.householdid || !itemId || body.adjustmentAmount ===undefined ) return res.status(400).json({error:"please provide itemId as well as adjusmentAmount"});

  const updateItem=await inventryoryData.findOneAndUpdate({_id:itemId,householdid:body.householdid},
    {$inc:{itemQuantity:body.adjustmentAmount}},
    {new:true},
  )

  if(!updateItem){
    return res.status(404).json({error:"item not found"});
  }
  //worning
  let warningMessage=null;
  if(updateItem.itemQuantity<=1){
    warningMessage=`warning: you are running low on ${updateItem.itemName}!`
  }

  return res.status(200).json({status:"inventory adjusted successfully",data:updateItem,warning:warningMessage})



}



//delete
async function deleteInventory(req,res){
  const itemId = req.params.id;
  const body = req.body;
  if (!body.householdid || !itemId) {
    return res.status(400).json({ error: "Please provide both householdid and itemId" });
  }

  try {
   
    const deletedItem = await inventryoryData.findOneAndDelete({ 
      _id: itemId, 
      householdid: body.householdid 
    });

  
    if (!deletedItem) {
      return res.status(404).json({ error: "Item not found or does not belong to this household" });
    }

    return res.status(200).json({ status: "Item deleted successfully", data: deletedItem });

  } catch (error) {
    console.error("Error deleting item:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


module.exports={
  addInventoryItem,
  getInventory,
  editInventory,
  deleteInventory,
}