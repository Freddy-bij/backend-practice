import express from "express";
import { createStudent, login, refreshToken } from "../controllers/student.controller.js";

const router = express.Router();
router.post('/register',createStudent);
router.post('/login', login)
router.post('/refresh-token', refreshToken)



export default router


