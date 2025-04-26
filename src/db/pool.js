const {Pool} = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
    connectionString : process.env.DB_CONN,
    ssl : {
        rejectUnauthorized : false
    }
})

pool.connect()
.then(()=>{console.log('DB conntection successful !')})
.catch((err)=>{console.log(err)})

module.exports = pool;