import express from "express"

import { createStudent, login } from "./../controllers/student.controller.js";



export const router = express.Router();


router.post("/" , createStudent)
router.get("/" , login)


