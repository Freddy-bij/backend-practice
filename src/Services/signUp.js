import { Student } from "../models/student.model.js";
import bcrypt from "bcryptjs";

export const createStudentUserService = async(userData) => {
    const {firstName, lastName, email, password} = userData;
    // logic to hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // logic to save the studend user in database
    const createStudentUser = new Student({
        firstName,
        lastName,
        email,
        password: hashedPassword,
    });
    const savedStudentUser = await  createStudentUser.save();
    return savedStudentUser;

}