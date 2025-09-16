import { Student } from "../models/student.model.js";


export const createStudent =  async(req,res) =>{
  try {
    const studentData = req.body;
    const newStudent = new Student(studentData)

    await newStudent.save();
    res.status(201).json( { student:newStudent , message: "student created successfully"})

     console.log(newStudent)

  }catch(error) {
    res.status(500).json({message: error.message})
  }
}