const express = require('express');
const router = express.Router();

const bodyParser=require("body-parser");

router.get('/',(req,res) => res.render('dashboard', { layout: false }));

router.post("/search",(req,res)=>{
    const b=req.body.search;
    if(b=="mobile"){
        res.render("mobile");
    }else if(b=="laptop"){
        res.render("laptop");
    }else{
        res.render("dashboard");
    }
});

module.exports = router;