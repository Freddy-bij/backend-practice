import mongoose from "mongoose";


const informationStudentSchema = mongoose.Schema(
{
    classe: String,
    section: String,
    rollNumber: String,
    age: Number,
    address: String,
    phone: Number,
    student : {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Student",
        required: true
    }
},
{timestamps:true}
)

const InformationStudent = mongoose.model("informationStudent", informationStudentSchema);
export default InformationStudent;