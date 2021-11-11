const express = require('express');
const {body} = require('express-validator');
const auth = require('../controllers/user_register');
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
router.get('/mobile',(req,res) => res.render('mobile', { layout: false }));

router.post('/',registervalidator,(req,res) => {
    auth.login(req,res);
});
module.exports = router;