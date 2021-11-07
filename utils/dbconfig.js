console.log("inside dg - config 1");
const { Pool } = require("pg");

const config = {
    host: 'localhost',
    port: '5432',
    database: 'Ecommerce',
    user: 'postgres',
    password: 'Nayak#03'
};
const pool = new Pool(config);

//const config = "postgres://ecbzuyyooykyaf:a40f40ccfcb1ffb8573f268f6367b6be6fcfbb9f8d6721939cd9973135f03673@ec2-44-195-209-130.compute-1.amazonaws.com:5432/dedl3ndopmgiir";
//const pool = new Pool({ connectionString: config,ssl: { rejectUnauthorized: false } });
module.exports = pool;
