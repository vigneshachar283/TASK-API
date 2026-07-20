const Task=require("./../models/Task")

const getalltasks=async(req,res)=>{
    
        try{
         let task = await Task.find({
            owner:req.user.id 
         }
         );
    
         res.json(task);
        }
        catch(err){
            res.status(500).send("error in fetching tasks");
        }
    }

const createtask=async (req,res)=>{
   const newtask= new Task({
    title:req.body.title,
    owner:req.user.id 

   })
    try{
   await newtask.save();
   res.status(201).send("task added successfully");
}
   catch(err){
    res.status(500).send("error in adding task");}
}

const gettaskbyid =async (req,res)=>{
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

}

const deletetask= async (req,res)=>
    
{
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
}

const updatetask=async(req,res)=>{
    const id =req.params.id;
    
        try{
            const task = await Task.findByIdAndUpdate(id,req.body);
            res.send("task updated successfully");
        }
        catch(err){
            res.status(500).send("Error in deleting");
        }
}

module.exports={
    getalltasks,
    createtask,
    gettaskbyid,
    deletetask,
    updatetask

}
