const express = require("express")
const router = require("express").Router();
const mongoose = require("mongoose")
const path = require("path");

// //MIDDLEWARES
router.use(express.static('../public/css'));

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

router.get('/report-a-case',(req,res)=>{
    res.sendFile(path.join(__dirname, '../public', 'report-form.html'))
})

router.post('/message', async (req,res)=>{
  const message = new Message({
           message: req.body.message
  }) 

   try {
      const newMessage = message.save();
      console.log(newMessage);
      
   } catch (error) {
       res.send(error)
   }
})



module.exports = router;