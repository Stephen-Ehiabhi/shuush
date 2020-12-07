const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const path = require("path");
const bcrypt = require('bcryptjs');

//MIDDLEWARES
router.use(express.static('./frontend/css'));

//IMPORTED ROUTE
const Volunteer = require("../models/Volunteer");
// const profile_photo_upload = require("../middlewares/file-upload");


//get routes to load restration page
router.get("/register", (req,res) => {
  res.sendFile(path.join(__dirname,'../public','register.html'))
});


//get routes to load the login page
router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'login.html'))
});


//get route to load the dashboard file
router.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'volunteer-dashboard.html'))
});

//get route to get a single volunteer
router.get("/profile/:id", async (req, res) => {
  try{
      const volunteer = await Volunteer.findById(req.params.id);
      return res.status(200).send(volunteer);
   }catch (error) {
      return res.status(404).send('volunteer not found')
  }
});




// const handleErrors = (err) => {
//    console.log(err.message, err.code)
//    let errors = { email: '', password: ''};

// //dupl error code
// if (err.code === 11000) {
//   errors.email = 'Email already registered';
//   return errors;
// }

//    //val errors
//    if(err.message.includes('volunteer validation failed')){
//       Object.values(err.errors).forEach(({properties})=>{
//           errors[properties.path] = properties.message;
//       })
//    }
   
//    return errors;

//    }
// profile_photo_upload.single('image')
//registration route
//@desc url /api/volunteer/register
router.post("/register",async (req, res) => {
 
//validate the input
const {firstname,lastname,date_of_birth,occupation,state_of_residence,volunteer_as,gender,about,phone_number,email} = req.body;

//check if volunteer already exists
  const volunteer = await Volunteer.findOne({ email });
  if(volunteer) return res.status(404).send("email already exists");

//creating a volunteer
  const newVolunteer = new Volunteer({
    firstname,
    lastname,
    date_of_birth,
    occupation,
    state_of_residence,
    volunteer_as,
    gender,
    about,
    phone_number,
    email
});
try{
//saving a volunteer to DB
  const savedVolunteer = await newVolunteer.save();
  res.status(200).send("successfully regisrered")
}catch(err){
//  const errors =  handleErrors(err)
 res.status(400).send(err)
}
});


//login route
//@desc url /api/volunteer/register
router.post("/login", async (req,res)=>{

const { email,password } = req.body;

try {
   //check if volunteer exists
  const volunteer = await volunteer.findOne({email});
  if(!volunteer) return res.status(404).send("Incorrect password or Email");

  //check password correct
  const passwordIsCorrect = await bcrypt.compare(password, volunteer.password);
  if(!passwordIsCorrect)  return res.status(404).send("Incorrect password or Email");

  const maxAge = 3 * 24 * 60 * 60;

  //create a jwt token
  const token = jwt.sign({id: volunteer._id, role: volunteer.role},process.env.TOKEN_SECRET,{ expiresIn: maxAge})

  //pass it to a cookie
  res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 } )

  res.redirect('/volunteer/dashboard')

} catch (err) {
  // const errors =  handleErrors(err)
  res.status(400).send(error)
}
});



router.get('/users', async (req,res)=> {
  try {
    //get all the Volunteer in the db
    const volunteer = await Volunteer.find()
   return res.status(201).send(volunteer)                                             
 } catch (error) {
    res.status(404).send(`There was an ${error} returning the DB`)                                                   
 }
 
 })
 
 //read a single case
 router.get('/profile/:id', async (req,res) => {
  try {
    //get all the Volunteer in the db
    const volunteer = await Volunteer.findById({ _id: req.params.id })
    return res.status(200).send(volunteer)                                             
 } catch (error) {
    res.status(404).send(`There was an ${error} returning the DB`)                                                   
 }
 
 })
 
 router.get('/count', async (req,res) => {
  try {
    //get all the reports in the db
    const getVolunteerCount = await Volunteer.countDocuments()
    return res.json(getVolunteerCount)                                             
 } catch (error) {
    res.status(404).send(`There was an error returning the DB`)                                                   
 }
 })
 // //update a single case
 // router.put('/profile/:id', async (req,res) => {
 //      //get all the Volunteer in the db
 //      const volunteer = await Volunteer.findByIdAndUpdate({ _id: req.params.id})
 //      const updatedReport = new Volunteer({
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
 router.delete('/profile/:id', async (req,res) => {
    try {
      //get all the Volunteer in the db
      const volunteer = await Volunteer.findByIdAndDelete({ _id: req.params.id})
      return res.status(200).send(volunteer)                                             
   } catch (error) {
      res.status(404).send(`There was an error returning the DB`)                                                   
   }
   
   })

  //  router.get('/logout',isAdmin,function(req,res){
  //   req.user.deleteToken(req.token,(err,user)=>{
  //       if(err) return res.status(400).send(err);
  //       res.sendStatus(200);
  //   });


module.exports = router
