const pool = require('../db/pool.js');

exports.getProducts = async (req,res)=>{
    try {
        const get_query = 'SELECT * FROM productsCatalog';
        pool.query(get_query,(err,result)=>{
            if(err){
                res.status(400).json({
                    status : "fail",
                    message : err.message,
                    err : err
                })
            }else{
                res.status(200).json({
                    status : "success",
                    data : result.rows
                })
            }
        });
    } catch (error) {
        res.status(400).json({
            status : 'fail',
            message : error.message,
            error : error
        })
    }
}


exports.placeOrder = async (req,res)=>{
    try {

        const {user_name,contact,delivery_address,order_status,product_id} = req.body;

        const get_query = 'INSERT INTO orders (user_name,contact,delivery_address,order_status,product_id) VALUES($1,$2,$3,$4,$5)';
        pool.query(get_query,[user_name,contact,delivery_address,order_status,product_id],(err,result)=>{
            if(err){
                res.status(400).json({
                    status : "fail",
                    message : err.message,
                    err : err
                })
            }else{
                res.status(201).json({
                    status : "success",
                    message : "Order Placed Successfully"
                })
            }
        });
    } catch (error) {
        res.status(400).json({
            status : 'fail',
            message : error.message,
            error : error
        })
    }
}

exports.getOrders = async (req,res)=>{
    try {
        const get_query = ` SELECT 
                o.order_id,
                o.user_name,
                o.contact,
                o.delivery_address,
                o.order_status,
                p.product_id,
                p.img_url,
                p.product_name,
                p.price_per_unit,
                p.is_fruit,
                p.is_vegetable
            FROM 
                orders o
            JOIN 
                productsCatalog p
            ON 
                o.product_id = p.product_id;
        `;
        pool.query(get_query,(err,result)=>{
            if(err){
                res.status(400).json({
                    status : "fail",
                    message : err.message,
                    err : err
                })
            }else{
                res.status(200).json({
                    status : "success",
                    data : result.rows
                })
            }
        });
    } catch (error) {
        res.status(400).json({
            status : 'fail',
            message : error.message,
            error : error
        })
    }
}