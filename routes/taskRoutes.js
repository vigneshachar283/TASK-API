const express= require('express')

const router=express.Router();

const Task =require("./../models/Task")

router.get("/tasks",async (req,res)=>
{
    try{
     let task = await Task.find();

     res.json(task);
    }
    catch(err){
        res.status(500).send("error in fetching tasks");
    }
})

router.post("/tasks",async (req,res)=>{
    const newtask= new Task(req.body);
    try{
   await newtask.save();
   res.status(201).send("task added successfully");
}
   catch(err){
    res.status(500).send("error in adding task");}

})


router.get("/tasks/:id",async (req,res)=>{

    const id =req.params.id;

    try{
const task = await Task.findById(id);
if(task==null){
    res.status(404).send("task not found");
}
res.json(task);

    }
    catch(err){
        res.status(500).send("error in fetching task");
    }

    
})


router.delete("/tasks/:id",async (req,res)=>{

    const id =req.params.id;
   
    try{

        const task = await Task.findByIdAndDelete(id);
        if(task==null){
            res.status(404).send("task not found");
        }
        res.send("task deleted successfully");

    }catch(err){
        res.status(500).send("error in deleting task");
    }
})

router.put("/tasks/:id",async (req,res)=>{

    const id =req.params.id;

    try{
        const task = await Task.findByIdAndUpdate(id,req.body);
        res.send("task updated successfully");
    }
    catch(err){
        res.status(500).send("Error in deleting");
    }

    
})


module.exports=router;
