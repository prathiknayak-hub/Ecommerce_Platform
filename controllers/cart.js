const jwt=require("jsonwebtoken");
const pool = require('../utils/dbconfig.js');

module.exports.insert_into_cart=async(req,res)=>{


    console.log(222);
    // console.log(req);
    // console.log(req.access_token);
    let token = req.cookies.token;
    console.log(token);
    if(!token){
        res.status(403).json()
        return;
    }
    let result=jwt.verify(token,'somesecret');

    console.log(result.email);

    req.body.email=result.email;
    try{
        console.log('hello');
        console.log(req.body);
        const {itemid,email}= req.body;
        console.log(itemid,email);
        const items = await pool.query("insert into cart (itemid,email) values ($1,$2)",[itemid,email]);
        console.log('hereeeeee')
    }
    catch(e){
        
    }
}


