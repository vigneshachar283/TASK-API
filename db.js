const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/taskmanager");

const db=mongoose.connection;

db.on("error",()=>{
    console.log("error in connecting to database");
}

)

db.on("connected",()=>{
    console.log("connected to database");
})

db.on("disconnected",()=>{
    console.log("disconnected from database");
})

module.exports=db;