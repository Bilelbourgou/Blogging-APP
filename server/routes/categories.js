const router = require('express').Router()
const Category = require('../model/category')


// Create Category 

router.post('/',async (req,res)=>{
    const newCat = new Category(req.body)
    try{
        const saveCat = await newCat.save()
        res.status(200).json(saveCat)
    }catch(error){
        res.status(500).json(error)
    } 
})


// get All categories

router.get('/',async (req,res)=>{
    try{
        const saveCat = await Category.find({})
        console.log(saveCat)
        res.status(200).json(saveCat)
    }catch(error){
        res.status(500).json(error)
    } 
})



module.exports = router