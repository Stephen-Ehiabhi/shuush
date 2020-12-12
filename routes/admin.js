const express = require("express")
const router = express.Router();;
const jwt = require("jsonwebtoken");
const path = require("path");
const bcrypt = require('bcryptjs');
const moment = require("moment")

// //MIDDLEWARES
router.use(express.static('../public/css'));

//IMPORTED ROUTE
const Admin = require("../models/Admin");
const { isAdmin} = require("../middlewares/auth")

// const profile_photo_upload = require("../middlewares/file-upload");

// //get routes to load admin restration page
// router.get("/", (req,res) => {
//   res.sendFile(path.join(__dirname,'../public','user_management.html'))
// });

//get routes to load the login page
router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'login.html'))
});

//get routes to load the login page
router.get("/register",isAdmin, (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'a-register.html'))
});

//get route to load the admin dashboard 
router.get("/dashboard",isAdmin,(req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'user_management.html'))
});

//get route to load the admin dashboard 
router.get("/dashboard/overview",isAdmin,(req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'overview.html'))
});

//get route to load the admin dashboard 
router.get("/dashboard/volunteers",isAdmin,(req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'volunteer.html'))
});

//get route to load the admin dashboard 
router.get("/dashboard/reports",isAdmin,(req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'reports.html'))
});

//get route to get a single admin
router.get("/profile/:id",isAdmin, async (req, res) => {
  try{
      const admin = await admin.findById(req.params.id);
      return res.status(200).send(admin);
   }catch (error) {
      return res.status(404).send('admin not found')
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
//    if(err.message.includes('admin validation failed')){
//       Object.values(err.errors).forEach(({properties})=>{
//           errors[properties.path] = properties.message;
//       })
//    }
   
//    return errors;

//    }
// profile_photo_upload.single('image')
//registration route
//@desc url /api/admin/register
router.post("/register",isAdmin,async (req, res) => {

   //validate the input
const {lastname,firstname,profile_photo,email,password,password2,id} = req.body;

//check if admin already exists
  const admin = await Admin.findOne({ email });
  if(admin) return res.status(404).send("email already exists");

//hash password
const salt = await bcrypt.genSalt(12);
const encryptedPassword = await bcrypt.hash(password, salt);


//creating a admin
  const newadmin = new Admin({
    id,
    firstname,
    lastname,
    email,
    password: encryptedPassword,
    date_of_registration: moment().format(),
    role: "admin"
});
try{
//saving a admin to DB
  const savedadmin = await newadmin.save();
  res.status(200).send("New user registered");
}catch(err){
//  const errors =  handleErrors(err)
 res.status(400).send(err)
}

});


// //login route
// //@desc url /api/admin/register
router.post("/login", async (req,res)=>{

const { email,password } = req.body;

try {
   //check if admin exists
  const admin = await Admin.findOne({email});
  if(!admin) return res.status(404).send("Incorrect  Email");

  //check password correct
  const passwordIsCorrect = await bcrypt.compare(password, admin.password);
  if(!passwordIsCorrect)  return res.status(404).send("Incorrect password ");

  const maxAge = 3 * 24 * 60 * 60;

  //create a jwt token
  const token = jwt.sign({id: admin._id, role: admin.role},process.env.TOKEN_SECRET,{ expiresIn: maxAge})

  //pass it to a cookie
  res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 } )
  
  res.redirect('/admin/dashboard')

} catch (err) {
  // const errors =  handleErrors(err)
  res.status(400).send(err)
}
});



router.get('/users', isAdmin,async (req,res)=> {
  try {
    //get all the admin in the db
    const admin = await Admin.find()
   return res.status(201).send(admin)                                             
 } catch (error) {
    res.status(404).send(`There was an ${error} returning the DB`)                                                   
 }
 
 })
 
 //read a single case
 router.get('/profile/:id', isAdmin,async (req,res) => {
  try {
    //get all the admin in the db
    const admin = await Admin.findById({ _id: req.params.id })
    return res.status(200).send(admin)                                             
 } catch (error) {
    res.status(404).send(`There was an ${error} returning the DB`)                                                   
 }
 
 })
 
 router.get('/count', isAdmin,async (req,res) => {
  try {
    //get all the reports in the db
    const getadminCount = await Admin.countDocuments()
    return res.json(getadminCount)                                             
 } catch (error) {
    res.status(404).send(`There was an error returning the DB`)                                                   
 }
 })
 // //update a single case
 // router.put('/profile/:id', async (req,res) => {
 //      //get all the admin in the db
 //      const admin = await Admin.findByIdAndUpdate({ _id: req.params.id})
 //      const updatedReport = new admin({
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
 router.delete('/profile/:id', isAdmin,async (req,res) => {
    try {
      //get all the admin in the db
      const admin = await admin.findByIdAndDelete({ _id: req.params.id})
      return res.status(200).send(admin)                                             
   } catch (error) {
      res.status(404).send(`There was an error returning the DB`)                                                   
   }
   
   })


  router.get('/logout',isAdmin,function(req,res){
    req.user.deleteToken(req.token,(err,user)=>{
        if(err) return res.status(400).send(err);
        res.sendStatus(200);
    });

}); 

module.exports = router