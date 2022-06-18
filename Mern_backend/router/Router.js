const express = require('express');
const router = express.Router();
const { getData,postData,deleteData,updateData } = require('../controller/controller')


router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.get('/',getData)
router.post('/',postData)
router.put('/:id',updateData)
router.delete('/:id',deleteData)


module.exports = router