import { GraduationCap } from 'lucide-react'
import React from 'react'

const Logo = () => {
  return (
    <div>
          <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary bg-blue-400 text-white ">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
             <h1 className='font-semibold text-lg'>SCHOOL<span className='text-blue-500'>DATA</span></h1>
             
            <p className="text-xs text-muted-foreground text-gray-500">School Management System</p>
          </div>
        </div>
  </div>

  )
}

export default Logo