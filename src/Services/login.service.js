import bcrypt from "bcryptjs";
import { Student } from "../models/student.model.js"
import { verifyToken } from "../utils/authmidleware.js";
import { generateToken } from "../utils/jwt.js";


export const loginService = async ( email , password) => {
    try {
        // user for demostration purpose
        const existingUser = await Student.findOne({email});
        if(!existingUser) {
            throw new Error ("User not found");
        }
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordValid) {
            throw new Error ("Invalid password");
        }else {
            const token = generateToken(existingUser);
            return {token, existingUser}
        }
        
    } catch (error) {
        throw new Error (error.message)
    }
}

export const refreshTokenService = async (oldToken) => {
    try {
        const decodedToken = verifyToken(oldToken);
        const student = await Student.findById(decodedToken._id);
        if(!student) throw new Error ("Student not found");
        const newToken = generateToken(student);
        return newToken;

        
    } catch (error) {
        throw new Error ("invalid token")
    }
}