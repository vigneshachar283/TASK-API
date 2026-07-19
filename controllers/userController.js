const User=require("./../models/User");
const bcrypt=require("bcrypt");


const registerUser=async(req,res)=>{
    const {name,email,password}=req.body;
    try{

        const existingUser=await User.findOne({email:email});
        if(existingUser){
            res.status(409).send("User already existing");
            return;
        }





    const hashedPassword = await bcrypt.hash(password,10);
   const user = new User({
    name: name,
    email: email,
    password: hashedPassword
});

   await user.save();

   res.status(201).send("User Login Succesfull");





    }catch(err){

        res.send(500).send(`Internal Server Error {err}`);
    }
}


module.exports=registerUser;
