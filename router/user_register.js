const express = require('express');
const router = express.Router();

// Register Page
router.get('/',(req,res) => res.render('user_register', { layout: false }));

// Register Handle
router.post('/',(req,res)=>{
    const {email,password,confirmpassword,phone,hno,street,city,district} = req.body;
    let errors = [];

    // Check required fields
    
});

module.exports = router;