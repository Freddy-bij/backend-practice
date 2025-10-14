import { Student } from "../models/student.model.js"

export const getUsersService = async () =>{
    const users = await Student.find({});
    return users;
}