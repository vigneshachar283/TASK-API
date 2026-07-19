const express= require('express')

const router=express.Router();

const Task =require("./../models/Task")

const {getalltasks,createtask,gettaskbyid,deletetask,updatetask}=require("./../controllers/taskController")


router.get("/", getalltasks)


router.post("/",createtask);


router.get("/tasks/:id",gettaskbyid);


router.delete("/tasks/:id",deletetask);

router.put("/tasks/:id",updatetask);


module.exports=router;
