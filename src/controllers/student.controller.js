
import { loginService, refreshTokenService } from "../Services/login.service.js";
import { createUserService } from "../Services/signUp.service.js";



export const createStudent = async (req ,res ) =>{
 try {
  const userData = req.body;
  const {token, existingUser} = await createUserService(userData);
  res.status(201).json({ token, existingUser, message:"user created succefully!"})
  
 } catch (error) {
  res.status(500).json({error:error.message})
  
 }
}
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { token, existingUser } = await loginService(email, password);
    res.json({ token, existingUser });
  } catch (error) {
    res.status(401).json({ message: error.message || "Invalid credentials" });
  }
};

export const refreshToken = async (req, res) => {
  try {
    const { token } = req.body; // ✅ FIXED
    const newToken = await refreshTokenService(token);
    res.json({ token: newToken });
  } catch (error) {
    res.status(401).json({ message: error.message || "Invalid token" });
  }
};
