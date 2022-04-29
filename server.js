const express =require('express');
const cors = require('cors');
const req = require('express/lib/request');
const redditsRouter=require('./routes/users');
const postsRouter=require('./routes/post_r')
const commentRouter=require('./routes/comment')

const app=express();
app.use(cors());
const Db=require('./db/db_connection')
Db
var bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use('/users',redditsRouter)
app.use('/posts',postsRouter)
app.use('/comments',commentRouter)
app.get('/', (req,res)=>{
  res.send("Reddits API")
})
app.use(express.json)
app.listen(3003,  () =>console.log('Server started'))


