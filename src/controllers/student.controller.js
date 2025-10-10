import jwt  from "jsonwebtoken";
import { Student } from "../models/student.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt.js";
import { verifyToken } from "../utils/authmidleware.js";



export const createStudent = async (req ,res ) =>{
 try {
   const {firstName, lastName,email,password} = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
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
      const token = generateToken(student)
       return res.status(200).json({
        message:"login successful",
        token,
        student
       })
    }
  
  }
    
  } catch (error) {
    res.status(500).json({error:error.message})
    
  }
}

 export const verificationToken = token =>{
  jwt.verify(token, process.env.SECRET_KEY,(err,decoded) =>{
  if (err) {
    console.log("invalid or expired token:", err.message);
  }else{
    console.log("Decoded user info" , decoded)
  }
})

 }

 export const getUsers = async (req,res) =>{
  try{
     const users = await Student.find({})
     res.status(200).json({users})
  }catch(error){
    res.status(500).json({error:error.message})
  }
 }

export const refreshToken = async (req,res) => {
  try {
    const oldToken = req.header("Authorization")?.split(" ")[1];
    if(!oldToken) {
      return res.status(401).json({ message: "Missing token"});
    }

    const decodedToken = await verifyToken(oldToken);
    const student = await Student.findById(decodedToken.id);
    if(!student) {
      return res.status(404).json({ message: "student not found"});
    }

    const newToken = generateToken(student);

    return res.status(200).json({
      message: "Token refreshed",
      token: newToken,
      student
    })
  }catch(error){
    res.status(401).json({ message: "invalid or expired token"});
  }
}