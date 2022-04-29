const express =require('express')
const todo = require('../models/reddit')

const router=express.Router()
const Todo=require('../models/reddit')
const tasks_controller=require('../controller/reddit_controller')

//getting all todos
router.get('/reddits/', tasks_controller.get_all_tasks)
    


//getting one todo
router.get('/:id',tasks_controller.gettodo, tasks_controller.getting_one_task)
//creating a todo
router.post('/', tasks_controller.creating_a_task)

//updating one
router.patch('/:id',tasks_controller.gettodo, tasks_controller.updating_tasks)
//Deleting one
router.delete('/:id', tasks_controller.gettodo,tasks_controller.deleting_a_task)



module.exports=router
