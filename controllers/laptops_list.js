const pool = require('../utils/dbconfig.js');

module.exports.fetch_laptops=async(req,res)=>{
    const laptops = await pool.query("select * from item where type='l'");
    return laptops.rows;
}
