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
    const errors=req.body.errors;

    const newProfile=new profile({
                                email,
                                password,
                                confirmPassword,
                                date,
                                errors,
                            })
    const curErrors=errors;
    console.log("errors");
    console.log(curErrors);
    if(!email||!password||!confirmPassword)
    {
        const check=(element)=>{
            const newElem={msg:"Please,Fill All fields"};
            if(newElem.msg===element.msg)
            {
                return element;
            }
        }
        if(curErrors.findIndex(check)===-1){
            curErrors.push({msg:"Please,Fill All fields"});
        }
    }  
    if(password!==confirmPassword)
    {
        const check=(element)=>{
            const newElem={msg:"Passwords Do Not Match"};
            if(newElem.msg===element.msg)
            {
                return element;
            }
        }
        if(curErrors.findIndex(check)===-1){
            curErrors.push({msg:"Passwords Do Not Match"});
        }
    }
    if(curErrors.length>0)
    {
        res.json(curErrors);
    }
    else
    {
    // profile.findOne({email:email})
    //        .then(profile=>{
    //            if(profile)
    //            {
    //                 res.status(409).json("Profile Already Exists");
    //            }
    //            else
    //            {
    //                 console.log("Your profile Is new");
    //                 newProfile.save()
    //                         .then(()=>res.json('Profile added successfully'))
    //                         .catch((err)=>res.status(400).json('Error : '+err));

    //            }
    //        })
    //        .catch(err=>console.log(err))
            res.send(pass);
    }
})

module.exports=router;