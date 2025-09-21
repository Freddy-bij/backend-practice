import { Student } from "../models/student.model.js"
import { generateToken } from "../utils/jwt.js";


export const loginService = async (email , password) =>{
    try{
        // find the user by email
        const existingUser = await Student.findOne({email})
        //  check the user if is exist
        if(!existingUser){
            throw new Error("user not found");
        }
    // find the valid password
       const  isPasswordValid = bcrypt.compare(password , existingUser.password);
    // check if the password is valid
        if(!isPasswordValid) {
            throw new Error("Invalid password")
        }
        const token = generateToken(existingUser);
        return token
    }catch (error){
        throw new Error("invalid create credentials")
    }

}