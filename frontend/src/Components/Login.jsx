import { CiLock } from "react-icons/ci"
import { MdOutlineEmail } from "react-icons/md"
import { useNavigate } from "react-router"
import { useAuth } from "../context/AuthContext";
import { useState } from "react";


const Login = () => {
  const navigate = useNavigate();
  // const {login} = useAuth();

  const [formData, setformData] = useState({
    email: "",
    password: "",
    })

    const [ error, setError] = useState({
      email: "",
      password: ""
    });
    const [serverError, setServerError] = useState("");
    const [isSubmitting , setIsSubmitting] = useState(false);

    const validateEmail = (email) =>{
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    // const validateForm = () => {
    //   const newError = {
    //      email: "",
    //      password: "",
    //   };
    //   let isValid = true;

      // if(!formData.email.trim()) {
      //   newError.email = "Email is required";
      //   isValid = false;
      // }else if(!validateEmail(formData.email)) {
      //   newError.email = "Please enter a valid email address";
      //   isValid = false;
      // }
//       if(!formData.password) {
//         newError.password = "Password is required";
//         isValid = false;
//       } else if (formData.password.length < 3) {
//         newError.password = "Password must be at least 3 characters long";
//         isValid = false;
//       }
//       setError(newError);
//       return isValid;
//     }

//     const handleInputChange = (e) => {
//       const {name, value} = e.target;
//       setError({
//         ...formData,
//         [name]: ""
//       });

//       setformData({
//         ...formData,
//         [name]: value,
//       });

//     } 


// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setServerError("");


//   if(!validateForm()){
//     return;
//   }

//   setIsSubmitting (true);
  
//   try {
//     const response = await fetch("http://localhost:3000/api/student/login", {
//       method: "POST" ,
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     if(!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || "login failed");
//     }

//     const result = await response.json();
//     login(result.existingUser, result.token);
    
//     const user = result?.user ?? result?.existingUser;
//     const token = result?.token;

//     if (!user || !token) {
//       throw new Error(result?.message || "Invalid login response");
//     }

//     const maybePromise = login(user, token);
//     if (maybePromise && typeof maybePromise.then === "function") {
//       await maybePromise;
//     }

//     navigate("/dashboard");
    
  
//   }catch(error){
//     console.log("Error Login: ", error);
//   }finally {
//     setIsSubmitting(false);
//   }

  return (
    
    <div className=" bg-gray-800/30">
      
        <div className="p-5">

          
            <form 
            // onSubmit={handleSubmit}
            className="flex flex-col ">

                <h2 className="text-center text-2xl mb-3 font-bold ">Login</h2>
                
                <div className="flex  relative">
                             < MdOutlineEmail  className="absolute  left-2 top-2.5 " />
                                  <input className="border mb-2 pl-7 text-sm w-full py-1.5 placeholder:text-gray-300  rounded outline-none " placeholder="Enter your email"/> 
                              </div>
                               <div className="flex  relative">
                               <CiLock className="absolute  left-2 top-2" />
                                 <input className="border mb-2 pl-7 rounded outline-non text-sm py-1.5 w-full placeholder:text-gray-300 " placeholder="Enter your password"   />
                              </div>
                               
                <button className="bg-blue-700 py-1.5 rounded hover:bg-blue-800">Login</button>
                <p className="text-center text-sm py-1">have'nt an acount?<span className="text-gray-950 underline underline-offset-2">signUp</span></p> 
            </form>
               
        </div>
    </div>
  )
}





export default Login