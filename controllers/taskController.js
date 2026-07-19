const Task=require("./../models/Task")

const getalltasks=async(req,res)=>{
    
        try{
         let task = await Task.find();
    
         res.json(task);
        }
        catch(err){
            res.status(500).send("error in fetching tasks");
        }
    }

const createtask=async (req,res)=>{
   const newtask= new Task(req.body);
    try{
   await newtask.save();
   res.status(201).send("task added successfully");
}
   catch(err){
    res.status(500).send("error in adding task");}
}


module.exports={
    getalltasks,
    createtask
}
