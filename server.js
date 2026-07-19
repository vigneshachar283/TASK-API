const express = require("express");
const app=express();

const db=require("./db");

const Task=require("./models/Task");

const router=require("./routes/taskRoutes");
const userRouter=require("./routes/userRoutes");


const port=3000;

app.use(express.json());


app.use("/tasks", router);

app.use("/users",userRouter);



app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})