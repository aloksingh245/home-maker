const express=require("express");

const {addInventoryItem,getInventory,editInventory,deleteInventory}=require("../controllers/inventory")

const router=express.Router();




router.post("/",addInventoryItem);

router.get("/show/:id",getInventory);

router.patch("/edit/:id",editInventory);

router.delete("/delete/:id", deleteInventory);

module.exports=router;
