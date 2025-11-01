import mongoose from "mongoose";

const informationStudentSchema = mongoose.Schema(
{   
    firstName: {
        type: String,
        required: true,
        trim: true,

    },
    lastName:{
        type:String,
        required: true,
        trim: true,
    },
    email: {
        type:String,
        required: true,
        unique: true,
        lowercase: true,
    },
    grade: {
        type: String,
        required: true,
    },
    Class: {
        type: String,
        trim: true,
    },
    combination: {
        type:String,
        required: true,
    },
    attendance: {
        type: Number,
        default:0
    },
    age: Number,
    adress: String,
    phone:String,
    status:{
        type: String,
        enum: ["Active" , "Warning"],
        default: "Active"
    }
},
{timestamps:true}
)

const InformationStudent = mongoose.model("informationStudent", informationStudentSchema);
export default InformationStudent;