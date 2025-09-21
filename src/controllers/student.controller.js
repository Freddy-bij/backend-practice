import { loginService } from "../Services/login.js";
import { createStudentUserService } from "../Services/signUp.js";

export const createStudent =  async(req,res) =>{
  try {
    const studentData = req.body;
    const user= await createStudentUserService(studentData)
    res.status(201).json( { student:user , message: "student created successfully"})
  }catch(error) {
    res.status(500).json({message: error.message})
  }
}

export const login = async(req,res) =>{
  try{
    const {email, password} = req.body;
    const token = await loginService(email, password);
    res.json({ token: token})

        console.log("🎫 Token generated:", token ? "YES" : "NO");
  }catch(error) {
    res.status
  }
}