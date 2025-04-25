const {Pool} = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    host : process.env.HOST,
    database : process.env.DB_NAME,
    port : process.env.DB_PORT
})

pool.connect()
.then(()=>{console.log('DB conntection successful !')})
.catch((err)=>{console.log(err)})

module.exports = pool;