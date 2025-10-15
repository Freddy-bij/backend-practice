import React from 'react'
import Form from './Form'

const Welcom = () => {
  return (
    <div className='bg-gradient-to-r from-gray-500 to-purple-500 via-blue-400 h-screen'>
      <div className='flex justify-between items-center p-4 bg-amber-50/20 text-white'>
        <h1 className='font-bold text-2xl'>SCHOOLS<span className='text-blue-500'>DATA</span></h1>
        <div className='space-x-4'>
            <buton className="bg-blue-500 px-4 py-2 rounded font-medium ">signIn</buton>
            <buton className="bg-gray-800 px-4 py-2 rounded font-medium">signUp</buton>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center h-4/5 text-white '>
         
         <Form/>
      </div>
        
    </div>
  )
}

export default Welcom