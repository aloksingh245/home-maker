const express=require("express");

const { addHousehold, getHousehold, updateHousehold, deleteHousehold }=require("../controllers/household");

const router=express.Router();

router.post("/", addHousehold);
router.get("/:id", getHousehold);
router.patch("/:id", updateHousehold);
router.delete("/:id", deleteHousehold);

module.exports=router;
