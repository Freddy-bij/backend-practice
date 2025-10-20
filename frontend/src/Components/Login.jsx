import { CiLock } from "react-icons/ci"
import { MdOutlineEmail } from "react-icons/md"


const Login = () => {
  return (
    <div className=" bg-gray-800/30">
      
        <div className="p-5">

            <h2 className="text-center text-2xl mb-3 font-bold ">Login</h2>
            <form className="flex flex-col ">
                
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