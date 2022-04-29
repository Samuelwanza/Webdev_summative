const express =require('express')
const post=require('../models/posts')
const db=require('../db/db_connection')
const auth=require('../routes/auth_middleware')
const router=express.Router()
db

const pst=async(req,res,next)=>{
    let Post;
    try{
        Post=await post.findById(req.params.id)
        if(Post==null){
            return res.status(404).json({message:"There is no post at that id"})
        }
        
    }catch (err){
        return res.status(500).json({message:err.message})
        
    }
    res.Post=Post
    next()

}


router.get("/get",auth,async(req,res)=> {
    try{
        const posts= await post.find()
        res.send(posts)
        
    }catch(err){
        res.status(500).json({message:err.message})
        
    }

 
})
router.post("/create",auth,async(req,res)=> {
    const posts= new post({
        title:req.body.title,
        body:req.body.body,
        vote_property:req.body.vote_property,
        user_id:auth.user_id
        
    })
    try {
        newpost=await posts.save()
        res.status(201).json(newpost._id)
        
    } catch (err) {
        res.status(400).json({message:err.message})
        
    }



})

router.delete('/:id',auth,pst, async(req,res)=> {
    try {
        await res.Post.remove()
        res.status(204).json()
    } catch (err) {
        res.status(500).json({message:err.message})

        
    }

})

router.patch('/:id',pst,async(req,res)=> {
    if(req.body.title!=null){
        res.Post.title=req.body.title


    }
    if(req.body.body!=null){
        res.Post.body=req.body.body


    }
    try {
        const updatedPost=await res.Post.save()
        res.status(204).json()
        
    } catch (err) {
        res.status(400).json({message:err.message})
        
    }



})











module.exports=router
