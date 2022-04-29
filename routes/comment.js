const express =require('express')
const comment=require('../models/comments')
const db=require('../db/db_connection')
const auth=require('../routes/auth_middleware')
const router=express.Router()
db

const pst=async(req,res,next)=>{
    let Comment;
    try{
        Comment=await comment.findById(req.params.id)
        if(Comment==null){
            return res.status(404).json({message:"There is no post at that id"})
        }
        
    }catch (err){
        return res.status(500).json({message:err.message})
        
    }
    res.Comment=Comment
    next()

}


router.get("/get",auth,async(req,res)=> {
    try{
        const comments= await comment.find()
        res.send(comments)
        
    }catch(err){
        res.status(500).json({message:err.message})
        
    }

 
})

router.post("/create",auth,async(req,res)=> {
    const comments= new comment({
        content:req.body.content,
        post_id:this.post.post_id,
        user_id:auth.user_id
        
    })
    try {
        newcomment=await comments.save()
        res.status(201).json(newcomment._id)
        
    } catch (err) {
        res.status(400).json({message:err.message})
        
    }



})

router.delete('/:id',auth,pst, async(req,res)=> {
    try {
        await res.Comment.remove()
        res.status(204).json()
    } catch (err) {
        res.status(500).json({message:err.message})

        
    }

})

router.patch('/:id',auth,pst,async(req,res)=> {
    if(req.body.content!=null){
        res.Comment.content=req.body.content


    }
    
    try {
        const updatedComment=await res.Comment.save()
        res.status(204).json()
        
    } catch (err) {
        res.status(400).json({message:err.message})
        
    }



})











module.exports=router
