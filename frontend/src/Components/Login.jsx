import { CiLock } from "react-icons/ci"
import { MdOutlineEmail } from "react-icons/md"
import { Link, useNavigate } from "react-router"
import { useAuth } from "../context/AuthContext";
import { useState } from "react";




const Login = () => {
  const navigate = useNavigate();
  const {login }= useAuth();


  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({

    email: "",
    password: "",
  });
  const [serverError, setServerError] = useState("");
  const [isSubmitting, SetIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      email: "",
      password: "",
    };
    let isValid = true;

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = " Please enter a valid email address";
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.strenght < 3) {
      newErrors.password = "Password must be at least 3 characters long";
      isValid = false
    }
    setErrors(newErrors);
    return isValid
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setErrors({
      ...errors,
      [name]: "",
    });

    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    if (!validateForm()) {
      return;
    }
    SetIsSubmitting(true)

    try {
      const reponse = await fetch("http://localhost:3000/api/students/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!reponse.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed")
      }
      const result = await reponse.json();
      login(result.existingUser, result.token);

      if (result.existingUser) {
        navigate("/dashboard")
      }
    } catch (error) {
      console.log("Error Login", error.message);
      setServerError(error.message || "Login failed. Please try again ")
    } finally {
      SetIsSubmitting(false);
    }
  }


  return (

    <div className='bg-gradient-to-r from-gray-500 to-purple-500 via-blue-400 h-screen'>

      <div className="flex flex-col justify-center items-center text-white h-4/5">

        <div className=" bg-gray-800/30">

          <div className="p-5">


            <form
              onSubmit={handleSubmit}
              className="flex flex-col ">

              <h2 className="text-center text-2xl mb-3 font-bold ">Login</h2>

              {serverError && (
                <div className=" p-2 text-sm text-red-600 bg-red-100 rounded-md">
                  {serverError}
                </div>
              )}

              <div className="flex  relative">
                < MdOutlineEmail className="absolute  left-2 top-2.5 " />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`border mb-2 pl-7 text-sm w-full py-1.5 placeholder:text-gray-300  rounded outline-none ${errors.email ? "border-red-500" : ""} `} placeholder="Enter your email" />
              </div>

              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}

              <div className="flex  relative">
                <CiLock className="absolute  left-2 top-2" />
                <input 
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`border mb-2 pl-7 rounded outline-non text-sm py-1.5 w-full placeholder:text-gray-300 ${ errors.password ? "border-red-500" : "outline-none"} `} placeholder="Enter your password" />
              </div>
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">{errors.password}</p>
              )}

              <button 
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-700 py-1.5 rounded hover:bg-blue-800">
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
              <p className="text-center text-sm py-1">have'nt an acount? <Link to="/"><span className="text-gray-950 underline underline-offset-2">signUp</span></Link> </p>
            </form>

          </div>
        </div>
      </div>
    </div>


  )
}



export default Login