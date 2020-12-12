const express = require('express')
const router = require("express").Router();
const mongoose = require("mongoose")
const path = require("path");
var moment = require('moment'); // require



//upload the file medias to the DB and store it
 //MIDDLEWARES
router.use(express.static('../public/css'));

const Reports = require('../models/Report-case-info')
// const medias = require('../middlewares/file-upload')
//auth
const {isAdmin} = require("../middlewares/auth")

//  medias.single('image')
router.post('/', async (req,res)=>{

       //getting the reports from the form
        const {
                    reported_for,
                    gender_of_the_victim,
                    age_of_the_victim,
                    gender_of__the_abuser,
                    the_school_case_happened,
                    anonymous_name,
                    abusers_name,
                    abusers_occupation,
                    abusers_department,
                    date_victim_was_assaulted,
                    victims_story,
                    email
                  } = req.body;

     //create a new report
       const newReports = new Reports({
                    reported_for,
                    gender_of_the_victim,
                    age_of_the_victim,
                    gender_of__the_abuser,
                    the_school_case_happened,
                    anonymous_name,
                    abusers_name,
                    abusers_occupation,
                    abusers_department,
                    date_victim_was_assaulted,
                    victims_story,
                  //   victims_case_evidence,
                    email,  
                     case_status: "pending",
                     date_of_report: moment().format() 
       })


    try {
           const latestReport = await newReports.save()
               
    } catch (error) {
         res.status(404).send(`There was an error saving a new report ${error}`)                  
    }
})

//get all the reports
router.get('/cases',isAdmin, async (req,res)=> {
 try {
   //get all the reports in the db
   const getReports = await Reports.find()
  return res.status(201).send(getReports)                                             
} catch (error) {
   res.status(404).send(`There was an ${error} returning the DB`)                                                   
  }
})

//read a single case
router.get('/:id',isAdmin, async (req,res) => {
try {
   //get all the reports in the db
   const getReports = await Reports.findById({ _id: req.params.id })
   return res.status(200).send(getReports)                                             
} catch (error) {
   res.status(404).send(`There was an ${error} returning the DB`)                                                   
}

})

// //update a single case
// router.put('/:id', async (req,res) => {
//      //get all the reports in the db
//      const getReports = await Reports.findByIdAndUpdate({ _id: req.params.id})
//      const updatedReport = new Reports({
//         case_status: req.body.case_status
//      })
//      try { 
//        const updatedInfo = await updatedReport.save()
//        return res.status(200).send(updatedInfo)
        
//      } catch (error) {
//       res.status(404).send(`There was an ${error} returning the DB`)                                                   

//      }
  
//   })

  //delete a single case
router.delete('/:id',isAdmin,async (req,res) => {
   try {
     //get all the reports in the db
     const getReports = await Reports.findByIdAndDelete({ _id: req.params.id})
     return res.status(200).send(getReports)                                             
  } catch (error) {
     res.status(404).send(`There was an error returning the DB`)                                                   
  }
  
  })

  //returns the amount of reported cases
  router.get('/totalcount',isAdmin,async (req,res) => {
 try {
      //get all the reports in the db
      const getReportCount = await Reports.countDocuments()
      return res.json(getReportCount)                                             
   } catch (error) {
      res.status(404).send(`There was an error returning the DB`)                                                   
   }
   
 
  })


    //returns the amount of pending reported cases
   //  router.get('/total_pending',isAdmin,async (req,res) => {
   //    try {
   //         //get all the reports in the db
   //         const getReportCount = await Reports.countDocuments({case_status: "pending"})
   //         return res.json(getReportCount)                                             
   //      } catch (error) {
   //         res.status(404).send(`There was an error returning the DB`)                                                   
   //      } 
   // })    

module.exports = router
