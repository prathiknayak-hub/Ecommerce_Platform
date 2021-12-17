const pool = require('../utils/dbconfig.js');

module.exports.fetch_mobiles=async(req,res)=>{
    const mobiles = await pool.query("select * from item where type='m'");
    return mobiles.rows;
}


