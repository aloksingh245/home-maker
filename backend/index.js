const express=require("express");

const inventoryRouts= require("./routes/inventory.js");
const householdRouts=require("./routes/household.js");

const {connectToMongoose}=require("./connect.js");


const app=express();
const port=8000;

app.use(express.json());

connectToMongoose('mongodb://127.0.0.1:27017/homemaker').then(()=>console.log("db connected "));

app.use("/inventory", inventoryRouts);

app.use("/household",householdRouts);






app.listen(port,()=>console.log(`server started at port ${port}`));