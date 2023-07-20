const TaskModel=require('../models/tasksModel.js')

const getAllTasks=async (req,res)=>{
    try {
        const tasks= await TaskModel.find({})
        res.status(200).json({tasks:tasks})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
 const createTask= async (req,res)=>{

    try {
        const task=await TaskModel.create(req.body)
    res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
    
 }

 const getTask=async (req,res)=>{
    try {
        const taskID=req.params.id
        const task=await TaskModel.findById(taskID)
        
        if(!task){
            return res.status(404).json({msg:`No task with ID:${taskID}`})
        }
        res.status(200).json({task:task})
    } catch (error) {
        res.status(404).json({msg:error})
    }
   
 }

 const updateTask=async(req,res)=>{
   try {
    const taskID=req.params.id
    const task= await TaskModel.findByIdAndUpdate(taskID,req.body,{new:true,runValidators:true})
    
    if(!task){
        return res.status(404).json({msg:`No task with id:${taskID}`})
    }

    res.status(200).json({task:task})
   } catch (error) {
    res.status(404).json({msg:error})
   }
 }
 const deleteTask=async(req,res)=>{
   try {
    const taskID=req.params.id
    const task=await TaskModel.findByIdAndDelete(taskID)
    if(!task){
        return res.status(404).json({msg:`No tak with idz; ${error}`})
    }
    res.status(200).json({task})
    
   } catch (error) {
    res.status(404).json({msg:error})
   }
 }

module.exports={
    getAllTasks,createTask,getTask,updateTask,deleteTask
}