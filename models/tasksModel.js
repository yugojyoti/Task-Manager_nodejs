const mongoose=require('mongoose')


const TaskSchema=new mongoose.Schema({
    name:{type:String, required:[true,'Must provide a name'],trim:true ,
     maxlength:[30,"name cant be longer than 30 characters"]},
     
    completed:{type:Boolean, default:false}
})

module.exports=mongoose.model('Task',TaskSchema)