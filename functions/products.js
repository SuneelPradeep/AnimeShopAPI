const express = require('express')
const serverless = require('serverless-http')
const product_routes = require("../routes/products")
const connectDB = require('../db/connect')

const app = express()
const PORT = process.env.PORT

const start = async()=>{
    try {
        await connectDB(); 
        
        app.listen(PORT, (req,res)=>{
          console.log( `yes connected to DB`) 
        })
    } catch (error) {
        console.log(error) ;
    }
}

start();
app.use('/.netlify/functions/products',product_routes)
module.exports.handler = serverless(app)