

// import { useState } from 'react'
import { Link } from 'react-router'
import Login from './Login'
import Register from './Register'
import Logo from './Logo'

const NavBar = () => {
 

  return (
    <div className='bg-gradient-to-r from-gray-500/50 to-purple-500 via-blue-400'>
      <div className='flex justify-between items-center p-4 bg-amber-50/20 text-white'>
       <Logo/>
        <div className='space-x-4'>
           <Link to="login"><button className="bg-blue-500 px-4 py-2 rounded font-medium">signIn</button></Link> 
           <Link to="/"><button className="bg-gray-800 px-4 py-2 rounded font-medium" > signUp</button></Link> 
        </div>
      </div>

   
    </div>
  )
}

export default NavBar