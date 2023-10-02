const express = require('express');
// const PostCompanyReq = require('../models/Pr_companyModel');

const router = express.Router();

//Add Products
router.post('/add',(req,res)=>{
    let newPost = new PostCompanyReq(req.body);
    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            
            success: "Add Product Saved Successfully"
        });
    });
});

//Read Products

router.get('/read',(req,res)=>{
    PostCompanyReq.find().exec((err,PostCompanyReq)=>{
        if(err){
            return res.status(400).json({
                error:err
            });

        }
        return res.status(200).json({
            success:true,
            existingPosts:PostCompanyReq
        });
    });
});

//Delete Products
router.delete('/delete/:id',(req,res)=>{
    PostCompanyReq.findByIdAndRemove(req.params.id).exec((err,deletePro)=>{
        if(err) return res.status(400).json({
            message:"Deleted Unsuccess",err
        });
        return res.json({
            message:"Delete success",deletePro
        });
    });
});


//Update Products
router.put('/update/:id',(req,res)=>{
    PostCompanyReq.findByIdAndUpdate(
        req.params.id,{
            $set:req.body
        },
        (err,updatePrp)=>{
                if(err){
                    return res.status(400).json({error:err});
                }
                return res.status(200).json({
                    success:"Updated Product"
                });
            }
        
    );
});

module.exports = router;