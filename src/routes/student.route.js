import express from "express"

import { createStudent } from "./../controllers/student.controller.js";


export const router = express.Router();


router.post("/" , createStudent)


