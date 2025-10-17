import { CiUser } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
const Register = () => {
  return (
    <div className=" bg-gray-800/30">
      
        <div className="p-5">

            <h2 className="text-center text-2xl mb-3 font-bold ">SIGNUP</h2>
            <form className="flex flex-col ">

               <div className="flex  relative">
                <CiUser className="absolute  left-2 top-1" />
                   <input className="border mb-2 pl-7 relative rounded outline-none " placeholder="Enter your last name"   />
               </div>
                  <div className="flex  relative">
                < MdOutlineEmail  className="absolute  left-2 top-1" />
                   <input className="border mb-2 pl-7 rounded outline-none " placeholder="Enter your email"/> 
               </div>
                <div className="flex  relative">
                <CiLock className="absolute  left-2 top-1" />
                  <input className="border mb-2 pl-7 rounded outline-none " placeholder="Enter your password"   />
               </div>
                
               
                <button className="bg-blue-700 py-1.5 rounded hover:bg-blue-800">signUp</button>
                <p className="text-center text-sm py-1">have you an acount?<span className="text-gray-950 underline underline-offset-2">signIn</span></p> 
            </form>
               
        </div>
    </div>
  )
}

export default Register