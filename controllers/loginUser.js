const User=require('./../models/User');
const bcrypt=require("bcrypt");

require("dotenv").config();

const jwt=require("jsonwebtoken");



const loginuser= async(req,res)=>{
    try{
       
        const {email,password}=req.body;

    

     const user = await User.findOne({email:email});
  
     
   

     if(!user)
     {
        
        res.status(401).send("User does not exists");
        return;
     }

        const payload = {
    id: user._id
}
       const hashedpassword= user.password;


    const isMatch= await  bcrypt.compare(req.body.password,hashedpassword);


    if(isMatch){

       const token= jwt.sign(payload, process.env.JWT_SECRET);
        res.status(200).json({"message":"Login Succesfull",
            "token":token});

    }
    else{
        res.status(401).send("Login Unsuccesfull");
    }



    }catch(err){

        res.status(500).send(`Internal server errror {err}`);



    }

}

module.exports=loginuser;