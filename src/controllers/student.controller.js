import jwt  from "jsonwebtoken";
import { Student } from "../models/student.model.js";
import bcrypt from "bcryptjs";

export const createStudent = async (req ,res ) =>{
 try {
   const {firstName, lastName,email,password} = req.body;
  const hashPassword = await bcrypt.hash(req.body.password, 10);
  const student = await Student.create({firstName,lastName,email,password:hashPassword})
  res.status(201).json({message:"user created succefully!",student})
  
 } catch (error) {
  res.status(500).json({error:error.message})
  
 }
}

export const loginStudent = async (req,res) => {
  try {
    const{email,password} = req.body;
    const student = await Student.findOne({email});
  if(!student){
    res.status(404).json({message:"student not found!"})
  }else{
    const comparePassword = bcrypt.compareSync(password,student.password)
    if(!comparePassword){
      res.status(403).json({message:"incorrect password"})
    }else{   
      const token = jwt.sign({student:student},process.env.SECRET_KEY,{expiresIn:"1d"})
        if(!token){
          res.status(403).json({message:"invalid token"})
        }else{
          res.status(201).json({message:"login succefully!"})
        }
    }
  
  }
    
  } catch (error) {
    res.status(500).json({error:error.message})
    
  }
}

