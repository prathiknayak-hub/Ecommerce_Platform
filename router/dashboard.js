const express = require('express');
const router = express.Router();

const bodyParser=require("body-parser");

router.get('/',(req,res) => res.render('dashboard', { layout: false }));

// router.get("/dashboard",(req,res)=>{
//     var b=req.body.search;
//     console.log(b);
    
//  if(b=="mobile"){
//     res.render("mobile",{layout:false});
// }else if(b=="laptop"){
//     res.render("laptop",{layout:false});
// }else{
//     res.render("dashboard",{layout:false});
// }
// });

module.exports = router;