const pool = require('../utils/dbconfig.js');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const JWT = require('jsonwebtoken')

async function register (req,res) {
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            console.log("222",errors.array())
            res.status(400).json({errors:errors.array()[1].msg});
            return
        }
        const {name,email,password,confirmpassword} = req.body;
        const check_if_user_exists = await pool.query("select email from CUSTOMER where email=$1",[email]);
        // console.log(check_if_user_exists.rows[0]);
        if(check_if_user_exists.rowCount!=0){
            res.status(404).json({errors:"Account already exists"})
            return;
        }
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt);
        // console.log(hash)
        const user_signup = await pool.query("insert into customer (email,password,name) values ($1,$2, $3)", [email,hash,name])
        // console.log(user_signup);
        res.json(201);
    }
    catch(e){
        res.status(500).json({
            errors: ' Invalid values'
        });
    }
}

async function login (req,res) {
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            console.log("222",errors.array())
            return res.status(400).json({errors:errors.array()[1].msg});
        }
        const {email,password} = req.body;
        const check_if_user_exists = await pool.query("select email from CUSTOMER where email=$1",[email]);
        if(check_if_user_exists.rowCount!=0){
            const hash_password = await pool.query("select password from CUSTOMER where email=$1", [email]);
            const hash_password_string = hash_password.rows[0].password
            const validPassword = await bcrypt.compare(password, hash_password_string);
            const token = await JWT.sign({
                email
            }, 'somesecret')
            if(!validPassword){
                return res.status(400).json({errors:'Invalid Password'})
            }
            else{
                res.cookie('access_token', token, {
                    maxAge: 3600000,
                    httpOnly: true
                })
            res.status(201).json({
                user: '1'
            });
            }
        }
        else{
            res.status(404).json({errors:"Email not registered. Please register yourself"});
            return;
        }
        
    }
    catch(e){
        res.status(500).json({
            errors: ' Invalid email or password'
        });
    }
}

module.exports = {register,login};