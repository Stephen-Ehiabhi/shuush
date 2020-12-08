const jwt = require('jsonwebtoken');


//to check if a user is logged in
const isLoggedIn  = (req,res,next) => {
   //check for the token is in the headers
  const token = req.cookies.jwt;
  if(!token) {
      res.redirect('/admin/login');
  } else{
        //verify if the token is legit
 jwt.verify(token, process.env.TOKEN_SECRET, ()=>{
   //  if(code){
        next();
   //  }else{
   //      res.redirect('/user/login');
   //  }
  })
  }
 
}


// const isNotLoggedIn  = (req,res,next) => {
//    //check for the token is in the headers
//    const token = req.cookies.jwt;
//    if(token) {
//        jwt.verify(token, process.env.TOKEN_SECRET, error => {
//            if(error) console.log(`isNotLoggedIn-validationError: ${error} `);
//            else res.redirect('/');
//        }) 
//    }else{
//       next();
//    }
// }


//to check user roles
const isAdmin  =  (req, res, next) => {
   //check for the token in the headers
   const token = req.cookies.jwt;
   if(!token) {
        res.redirect('/admin/login');
   }
   //verify if the token is legit
   jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken)=>{
     if(err){
           res.redirect('/admin/login');
     }else{
       if (decodedToken.role === 'admin') {
            next();
       } else {
            res.redirect('/admin/login');
       }
       
     }
   })
}



module.exports = { isLoggedIn, isAdmin}