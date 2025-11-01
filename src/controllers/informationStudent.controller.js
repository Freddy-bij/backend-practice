import InformationStudent from "../models/informationStudent.model.js";

export const createStudentInfo = async ( req , res) => {
    const { firstName, lastName, attendance, age , address, Class, phone, status, section } = req.body;
    const {student} = req.body
    try {
        const informations = await InformationStudent.create({
            firstName,
            lastName,
            email,
            grade,
            attendance,
            age,
            address,
            Class,
            phone,
            status,
            combination,
            
        });
        res.status(201).json({ informations, message: "student information submitted successfully!"});

    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}

export const getAllStudentInfo = async (req, res) => {
    try{
       const studentInfos = await InformationStudent.find({})
       res.status(200).json(studentInfos)
    }catch(error){
        res.status(500).json({ message: error.message})
    }
}

export const getStudentInfo = async (req,res) =>{
try {
    const {id}= req.params;
    const studentInfo = await InformationStudent.findById(id)
    res.status(200).json(studentInfo)
} catch (error) {
    res.status(500).json({ message: error.message})
}
}

export const uppdateStudentInfo  = async (req, res) =>{
    try {
        const {id} = req.params
        const status = req.body

        const updateInfo = await InformationStudent.findByIdAndUpdate(id, {status}, {new:true})
        if(!updateInfo){
            return res.status(404).json({message: "student information not found"})
        }
        res.status(200).json(updateInfo)
    } catch (error) {
        
    }
}
