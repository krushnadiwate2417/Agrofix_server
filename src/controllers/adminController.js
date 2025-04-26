const pool = require('../db/pool.js');


exports.getProducts = (req,res)=>{
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

exports.addProducts =  (req,res)=>{
    try {
        const {img_url,product_name,price_per_unit,is_fruit,is_vegetable} = req.body;
        const insert_query = 'INSERT INTO productsCatalog (img_url,product_name,price_per_unit,is_fruit,is_vegetable) VALUES ($1,$2,$3,$4,$5)';
        pool.query(insert_query,[img_url,product_name,price_per_unit,is_fruit,is_vegetable],(err,result)=>{
            if(err){
                console.log(err)
                res.status(400).json({
                    status : "fail",
                    message : err.message,
                    err : err
                })
            }else{
                res.status(201).json({
                    status : "success",
                    message : "Product Added Successfully ! "
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


exports.updateStatus = (req,res)=>{
    try {
        const {order_status,order_id} = req.body
        const update_query = 'UPDATE orders SET order_status = $1 WHERE order_id = $2';
        pool.query(update_query,[order_status,order_id],(err,result)=>{
            if(err){
                res.status(400).json({
                    status : "fail",
                    message : err.message,
                    err : err
                })
            }else{
                res.status(201).json({
                    status : "success",
                    message : "Order status updated successfully ! "
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


exports.updateProduct = (req,res)=>{
    try {
        const {status,productId} = req.body
        const get_query = 'UPDATE productsCatalog SET status = $1 WHERE productId = $2';
        pool.query(get_query,[status,productId],(err,result)=>{
            if(err){
                res.status(400).json({
                    status : "fail",
                    message : err.message,
                    err : err
                })
            }else{
                res.status(201).json({
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

exports.deleteProduct = (req,res)=>{
    try {
        const productId = req.params.productId
        const delete_query = 'DELETE FROM productsCatalog WHERE product_id = $1';
        pool.query(delete_query,[productId],(err,result)=>{
            if(err){
                res.status(400).json({
                    status : "fail",
                    message : err.message,
                    err : err
                })
            }else{
                res.status(200).json({
                    status : "success",
                    message : "Product Deleted Successfully"
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