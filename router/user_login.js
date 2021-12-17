const express = require('express');
const {body} = require('express-validator');
const auth = require('../controllers/user_register');
const mobilelist = require('../controllers/mobiles_list');
const laptoplist = require('../controllers/laptops_list');
const router = express.Router();

const registervalidator=[
    body("email")
    .exists()
    .notEmpty()
    .isEmail()
    .withMessage("Please provide a valid email address"),

    body("password")
    .exists()
    .isAlphanumeric()
    .notEmpty()
    .isLength({min:6,max:20})
    .withMessage("Please enter a valid password")
]

router.get('/',(req,res) => res.render('user_login', { layout: false }));
//router.get('/register',(req,res) => res.render('user_register', { layout: false }));
router.get('/mobile',async(req,res) => {
   let mobiles =await mobilelist.fetch_mobiles(req,res);
   console.log(1234,mobiles);
    res.render('mobile', { layout: false, mobiles: mobiles })
});

router.get('/laptop',async(req,res) => {
    let laptops =await laptoplist.fetch_laptops(req,res);
     res.render('laptop', { layout: false,laptops:laptops })
 });

 router.get('/orders',async(req,res) => {
     res.render('orders', { layout: false })
 });

 router.get('/cart',async(req,res) => {
     res.render('cart', { layout: false })
 });

router.post('/',registervalidator,(req,res) => {
    auth.login(req,res);
});

router.get("/logout", async (req, res) => {
    console.log("hi")
    res.clearCookie('token')
    console.log("Successfully logged out ")
    res.render('user_login', { layout: false })
  })
module.exports = router;