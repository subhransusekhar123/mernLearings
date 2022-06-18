const express = require('express');
const app = express();
var multipart = require('connect-multiparty');
const path = require('path')
var multipartMiddleware = multipart({ uploadDir: path.join(__dirname,"images") });
const fileRouter = express.Router();

const fileUpload = (req,res) =>{
    res.send(req.body)
    // res.status(200).send("posted")
}

fileRouter.post('/fileUpload',multipartMiddleware,fileUpload)

module.exports = fileRouter