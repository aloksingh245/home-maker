const express=require("exporess");

const {addInventoryItem}=require("../controllers/inventory")

const router=express.router();




router.post("/",addInventoryItem);


module.exports=router;
