const express =require("express");

const router=express.Router();

const registerUser=require("./../controllers/userController");
const loginuser=require("./../controllers/loginUser");




router.post("/register",registerUser);
router.post("/login",loginuser);

module.exports=router;

