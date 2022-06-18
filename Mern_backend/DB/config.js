const mongoose = require('mongoose')
const express = require('express');
const app = express()
const port = process.env.PORT || 5000;


const connectDB =async (URL)=>{
    try{
        await mongoose.connect(URL)
        .then(()=>{
           
            console.log('connected')
        })
       
    }catch(err){

        console.log(err)
    }

}

module.exports = {
    connectDB:connectDB
}