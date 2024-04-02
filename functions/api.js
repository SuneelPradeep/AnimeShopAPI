const express = require('express')
const serverless = require('serverless-http')
const app = express()
const product_routes = require('../routes/products');

const router = express.Router()

router.get('/',(req,res)=>{
    res.send("Welcome to AnimeShop API")
})


app.use('/.netlify/functions/api',router);
module.exports.handler = serverless(app)
