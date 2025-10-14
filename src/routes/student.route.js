import express from "express";
import { createStudent, getUsers, login, refreshToken } from "../controllers/student.controller.js";

const router = express.Router();
router.post('/register',createStudent);
router.post('/login', login)
router.post('/refresh-token', refreshToken)
router.get("/get-users" , getUsers )



export default router


