const mongoose = require('mongoose');

const register_Schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const data_schema = mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    }

})



const register_model = mongoose.model("product",register_Schema);
const data_model = mongoose.model("data",data_schema);


module.exports={
   
    register_model:register_model,
    data_model:data_model


}

