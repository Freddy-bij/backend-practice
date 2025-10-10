import express from "express";
import { createStudent, loginStudent, refreshToken } from "../controllers/student.controller.js";

const router = express.Router();
router.post('/register',createStudent)
router.post('/login',loginStudent)
router.post('/refresh-token', refreshToken)

export default router


