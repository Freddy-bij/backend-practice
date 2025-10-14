import InformationStudent from "../models/informationStudent.model.js";

export const createStudentInfo = async ( req , res) => {
    const { age , address, classe, phone, rollNumber , section } = req.body;
    const {student} = req.body
    try {
        const studentInfo = await InformationStudent.create({
            age,
            address,
            classe,
            phone,
            rollNumber,
            section,
            student
        });
        res.status(201).json({ studentInfo, message: "student information submitted successfully!"});

    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}