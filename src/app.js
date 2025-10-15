import express from 'express';
import { connectDB } from './Config/db.js';
import dotenv from "dotenv"
 import  router  from './routes/student.route.js';
import { createStudentInfo, getAllStudentInfo, uppdateStudentInfo } from './controllers/informationStudent.controller.js';
import { authenticateToken } from './utils/authmidleware.js';

dotenv.config();


const app = express();

app.use(express.json());

 app.use('/api/students', router)

 app.post("/api/informations", createStudentInfo)
 app.get("/api/informations", getAllStudentInfo)
 app.put("api/informations/:id", authenticateToken, uppdateStudentInfo)

const PORT = process.env.PORT;

app.listen(PORT, async() =>{
    await connectDB();
    console.log(`Server is running on port ${PORT}`)
})