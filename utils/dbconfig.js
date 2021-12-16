console.log("inside dg - config 1");
const { Pool } = require("pg");

// const config = {
//     host: 'localhost',
//     port: '5432',
//     database: 'Ecommerce',
//     user: 'postgres',
//     password: 'Nayak#03'
// };
// const pool = new Pool(config);

const config = "postgres://azaaitbzbipdyg:37e23ac908aa442e91aafa2e3db285e2553f945b25bd09185b58b9e20792242a@ec2-3-230-219-251.compute-1.amazonaws.com:5432/d4n1r7pdk54aqq";
const pool = new Pool({ connectionString: config,ssl: { rejectUnauthorized: false } });
module.exports = pool;
