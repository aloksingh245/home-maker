const express=require("express");

const inventryoryData=require("../models/inventory")


//post
async function addInventoryItem(req,res) {
  const body=req.body;

  if (!body.itemId || !body.itemName || !body.itemQuantity || !body.itemUnit  ) return res.status(400).json({error:"data is not appropriate please provide the desired data"});
  const existingItem=await inventryoryData.findOne({itemId});
  if(existingItem) res.json({status:"dublicate data is filled"});
  await inventryoryData.create({
     itemId:body.itemId,
     itemName: body.itemName,
     itemQuantity:body.itemQuantity,
     itemUnit:body.itemUnit,

  })
  res.json({status:"data saved to db"});
  
}


//patch


//delete


module.exports={
  addInventoryItem,
}