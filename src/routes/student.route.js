import express from "express";
import { createStudent, loginStudent } from "../controllers/student.controller.js";

const router = express.Router();
router.post('/register',createStudent)
router.post('/login',loginStudent)

export default router


