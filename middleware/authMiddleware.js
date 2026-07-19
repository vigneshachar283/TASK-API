
const jwt = require("jsonwebtoken");

require("dotenv").config();

const authMiddleware=(req,res,next)=>{
    const header=req.headers.authorization;

    if(!header)
    {
        res.status(401).send("Unauthorized Access");
        return ;
    }

    const token= header.split(" ");

     const newtoken =token[1];

     try{
       const decoded= jwt.verify(
    newtoken,
    process.env.JWT_SECRET
)    
req.user=decoded;
next();
}
catch(err){
res.status(500).send(`Internal server error{err}`);
}




     }





module.exports=authMiddleware;