import { CiUser } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { useNavigate } from "react-router";
import { useState } from "react";
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormDate] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name , value} = e.target;

    setFormDate({
      ...formData,
      [name] : value,
    });
  };
  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:3000/api/students/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
    navigate("/dashboard"); 
  } catch (error) {
    console.error(error);
  }
}
  return (
    <div className=" bg-gray-800/30">
      
        <div className="p-5">

            <h2 className="text-center text-2xl mb-3 font-bold ">SIGNUP</h2>
            <form
             className="flex flex-col "
             onSubmit={handleSubmit}
            >

                <div className="flex  relative">
                <CiUser className="absolute  left-2 top-2.5" />
                   <input 
                   type="text"
                   name="firstName"
                   value={formData.firstName}
                   onChange={handleChange}
                   className="border mb-2 pl-7 py-2 w-full placeholder-gray-300 text-sm relative rounded outline-none " placeholder="Enter your first name"   />
               </div>
            
                <div className="flex  relative">
                <CiUser className="absolute  left-2 top-2.5" />
                   <input 
                     type="text"
                     name="lastName"
                     value={formData.lastName}
                     onChange={handleChange}
                   className="border mb-2 pl-7 py-2 w-full placeholder-gray-300 text-sm relative rounded outline-none " placeholder="Enter your last name"   />
               </div>
                  <div className="flex    relative">
                < MdOutlineEmail  className="absolute  left-2 top-2.5" />
                   <input 
                   type="email"
                   name="email"
                   value={formData.email}
                   onChange={handleChange}
                   className="border mb-2 pl-7 py-2 rounded text-sm w-full placeholder-text-gray-300 outline-none " placeholder="Enter your email"/> 
               </div>
                <div className="flex  relative">
                <CiLock className="absolute  left-2 top-2.5" />
                  <input 
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border mb-2 pl-7 text-sm py-2 rounded outline-none " placeholder="Enter your password"   />
               </div>
                
               
                <button className="bg-blue-700 py-1.5 rounded hover:bg-blue-800">signUp</button>
                <p className="text-center text-sm py-1">have you an acount?<span className="text-gray-950 hover:underline underline-offset-2 ">signIn</span></p> 
            </form>
               
        </div>
    </div>
  )
}

export default Register