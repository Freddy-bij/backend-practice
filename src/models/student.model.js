import mongoose from "mongoose";

const studentSchema =  mongoose.Schema({
    name:{ type:String,required:true},
    postName:{type:String , required: true},
    age:{type:Number , required: true},
    grade: {type:String, required: true}
}, {timestamps:true})  

export const Student =mongoose.model("Student", studentSchema)