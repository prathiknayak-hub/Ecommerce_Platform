const jwt=require("jsonwebtoken");
const pool = require('../utils/dbconfig.js');

module.exports.insert_into_order=async(req,res)=>{
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
        const {itemid,qty,email}= req.body;
        console.log(itemid,email,qty);
        const items = await pool.query("insert into ordertable (itemid,qty,email) values ($1,$2,$3)",[itemid,qty,email]);
        console.log('hereeeeee')
    }
    catch(e){
        
    }
}