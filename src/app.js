import express from 'express';
import { connectDB } from './Config/db.js';
import dotenv from "dotenv"
 import  router  from './routes/student.route.js';
import { createStudentInfo } from './controllers/informationStudent.controller.js';

dotenv.config();


const app = express();

app.use(express.json());

 app.use('/api/students', router)

 app.post("/api/informations", createStudentInfo)

const PORT = process.env.PORT;

app.listen(PORT, async() =>{
    await connectDB();
    console.log(`Server is running on port ${PORT}`)
})