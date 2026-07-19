const express= require('express')

const router=express.Router();

const Task =require("./../models/Task")

const {getalltasks,createtask,gettaskbyid,deletetask,updatetask}=require("./../controllers/taskController")

const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, getalltasks)


router.post("/", authMiddleware,createtask);


router.get("/tasks/:id", authMiddleware,gettaskbyid);


router.delete("/tasks/:id", authMiddleware,deletetask);

router.put("/tasks/:id", authMiddleware,updatetask);


module.exports=router;
