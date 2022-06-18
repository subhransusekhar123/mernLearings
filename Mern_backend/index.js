require('dotenv').config();
const cors = require('cors')
const port = process.env.PORT || 5000;
const express = require('express');
const app = express();
const mongoDB = require('./DB/config')
const mongolink = process.env.mongoose_URL;
const {register_model,data_model} = require('./DB/user')
const JWT = require('jsonwebtoken');
var privateKey = "subhransu";
const router = require('./router/Router');
const fileRouter = require('./router/fileupoadRouter');
   
app.use(cors())    
app.use(express.json())

app.use('/Api',router)
app.use('/upload',fileRouter)
app.get('/register',(req,res)=>{
    res.send('done')
})

app.post('/register',async(req,res)=>{
    // console.warn(req.body)
    const user = register_model(req.body)
    const result =await user.save();
    console.log(result)
    res.send('api in progress...')
})

app.post('/login',async(req,res)=>{
    if(req.body.email && req.body.password){

        console.log(req.body)
       let user =await register_model.findOne({"email":req.body.email});
        console.log(user)
        if(user.email){
            var gudu = {...user}
            var token = JWT.sign({ userName : user.name }, privateKey);
            console.log(token)
            gudu.token = token
            if(user.name === "Subhransu"){
                res.json({"login":gudu,path:["/product","/add","/update"]})
            }else{
                res.json({"login":user.name , path:['/profile']})
            }

            
        }else{
            res.json({'result':"no user found"})
        }
    }else{
        res.json({'result':"no user found"})
    }
})



mongoDB.connectDB(mongolink);

app.listen(port,()=>{
    console.log(`port running at ${port}`)
});



