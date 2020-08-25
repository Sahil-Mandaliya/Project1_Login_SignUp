// import signUp from "../../src/Components/signUp";

const express=require('express');

const profile=require('../models/profiles.models');

const router=express.Router();

router.get('/',(req,res)=>{
    profile.find()
            .then(profiles=>res.json(profiles))
            .catch(err=>res.status(400).json('Error : '+err));
})

router.post('/add',(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const confirmPassword=req.body.confirmPassword;
    const date=Date.parse(req.body.date);
  

    const newProfile=new profile({
                                email,
                                password,
                                confirmPassword,
                                date,
                                
                            })
    const curErrors= [];
   
    if(!email)  curErrors.push({msg:"oops !! Enter your Email !!"});
    if (!password || !confirmPassword) curErrors.push({ msg: "Enter your password !!" });
    if(password !== confirmPassword) curErrors.push({msg:"Passwords Do Not Match"});
    if (password.length < 5) curErrors.push({ msg: "password is too short " });
  
        res.json(curErrors);
   
})

module.exports=router;