const express=require("express");

const household=require("../models/household");
const inventryoryData=require("../models/inventory");

//post
async function addHousehold(req,res){
  const body=req.body;
  if(!body.Name) return res.status(400).json({error:"please enter the Name "});

  try {
    const newHousehold = await household.create({
      Name: body.Name,
    });
    return res.status(201).json({ status: "household created successfully", data: newHousehold });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
}

//get
async function getHousehold(req,res){
  const id=req.params.id;
  try {
    const data= await household.findById(id);
    if (!data) return res.status(404).json({ error: "Household not found" });
    return res.status(200).json({data});
  } catch (error) {
    return res.status(500).json({ error: "Invalid ID format or server error" });
  }
}

//patch
async function updateHousehold(req, res) {
  const id = req.params.id;
  const body = req.body;

  if(!body.Name) return res.status(400).json({ error: "Please provide a Name to update" });

  try {
    const updatedHousehold = await household.findByIdAndUpdate(
      id,
      { Name: body.Name }, 
      { new: true }
    );

    if (!updatedHousehold) return res.status(404).json({ error: "Household not found" });
    return res.status(200).json({ status: "Household updated successfully", data: updatedHousehold });
  } catch (error) {
    return res.status(500).json({ error: "Error updating household" });
  }
}

//delete
async function deleteHousehold(req, res) {
  const id = req.params.id;

  try {
    const deletedHousehold = await household.findByIdAndDelete(id);

    if (!deletedHousehold) return res.status(404).json({ error: "Household not found" });

    // Clean up all linked inventory items
    await inventryoryData.deleteMany({ householdid: id });

    return res.status(200).json({ status: "Household deleted successfully", data: deletedHousehold });
  } catch (error) {
    return res.status(500).json({ error: "Error deleting household" });
  }
}

module.exports={
  addHousehold,
  getHousehold,
  updateHousehold,
  deleteHousehold
};
