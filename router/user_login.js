const express = require('express');
const router = express.Router();

router.get('/',(req,res) => res.render('user_login', { layout: false }));
//router.get('/register',(req,res) => res.render('user_register', { layout: false }));
module.exports = router;