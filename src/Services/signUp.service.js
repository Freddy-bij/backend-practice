import bcrypt from "bcryptjs";
import { Student } from "../models/student.model.js";
import { generateToken } from "../utils/jwt.js";

export const createUserService = async (userData) =>{
    const  {firstName, lastName, email,password} = userData;
    const hashPassword = await bcrypt.hash(password,10);
    const createUser = new Student({
        firstName,
        lastName,
        email,
        password:hashPassword,
    });
    const savedUser = await createUser.save();

    if(!savedUser) {
        throw new Error("User couldn't be created");
    }else{
        const token = generateToken(savedUser);
        return {token, existingUser: savedUser};
    }
    
}