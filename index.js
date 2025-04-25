const express = require('express');
const cors = require('cors');
const userRoute = require('./src/routes/userRoute');
const adminRoute = require('./src/routes/adminRoute');
const pool = require('./src/db/pool.js')


const app = express();
const port = process.env.PORT || 5001
const allowedOrigins = ['http://localhost:3000'];

app.use(cors({
    origin : function (origin,callback){
        if(!origin || allowedOrigins.includes(origin)){
            callback(null,true);
        }else{
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials : true
}))

app.use(express.json());
app.use('/api/v1/user',userRoute);
app.use('/api/v1/admin',adminRoute);


app.use('/',(req,res,next)=>{
    res.send({
        status : "success",
        error : false
    })
    next();
})

app.listen(port,()=>{
    console.log(`Server Started On port ${port}`)
})

