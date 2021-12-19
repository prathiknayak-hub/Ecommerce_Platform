const pool = require('../utils/dbconfig.js');
const jwt=require("jsonwebtoken");

module.exports.fetch_orders=async(req,res)=>{
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
        const email = req.body.email;
        console.log(req.body.email);
        console.log('hereeee')
        console.log(email);
        const items = await pool.query("select * from item I, ordertable O where I.itemid=O.itemid and O.email=$1",[email]);
        console.log('hereee')
        console.log(items.rows);
        return items.rows;
    }catch(e){

    }
}