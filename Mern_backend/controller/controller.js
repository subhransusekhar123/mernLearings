const { data_model } = require("../DB/user");


const getData =async (req,res) =>{
    let data =await data_model.find();
    console.log(data)
    res.send(data)
}

const postData =async (req,res)=>{
    console.log(req.body);
    let data = await data_model(req.body)
    let result =await data.save()

    res.send(result)
}

const deleteData =async (req,res)=>{
    console.log(req.params)
    let result =await data_model.deleteOne({"_id":req.params.id})
    res.send(result)
}

const updateData = (req,res)=>{
    res.send('data posted')
}


module.exports = {
    getData:getData,postData:postData,deleteData:deleteData,updateData:updateData,
}