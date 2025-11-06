
import { Plus, X } from "lucide-react"
import EnrollmentTrend from "../Components/EnrollmentTrend"
import GradeDistribution from "../Components/GradeDistribution"
import Header from "../Components/Header"
import StatsCards from "../Components/StatsCards"
import TableStudentsData from "../Components/TableStudentsData"
import { useState } from "react"
import { filsContent } from "../context/context"


import Select from 'react-select';
import RegistrationForm from "../Components/RegistrationForm"






const HomePage = () => {
  const [isAddStudentDialog, setIsAddStudentDialog] = useState(false)
  return (
    <div className="   ">
      
      <main className="container mx-auto  space-y-6">
        <div className="flex justify-between items-center">
       
          <div>
            <section className="animate-slide-up" style={{ animationDelay: "1000ms" }}>
              <h3 className="text-2xl font-semibold text-white  flex items-center">
                <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full mr-4"></div>
                 Student Data
              </h3>
            </section>
            <p className="text-muted-foreground mt-2 text-gray-300">Comprehensive overview of student information and analytics</p>
          </div>

          <div className="flex items-center gap-2 bg-blue-400 text-white rounded-md  px-4 py-1.5" onClick={() => setIsAddStudentDialog(true)}>
            <Plus className="h-4 w-4" />
            <h1>Add Student</h1>
          </div>
        </div>
    
        <filsContent.Provider value={{ isAddStudentDialog , setIsAddStudentDialog}}>

          {isAddStudentDialog && (
          <div className=" flex flex-col  items-center   w-4/5 mx-auto p-6 absolute top-20    z-1  ">
          
        <RegistrationForm />

          </div>

        )}
        </filsContent.Provider>
        
        <div>

        </div>
        <StatsCards />

        <div className="grid gap-6 md:grid-cols-2">

          <EnrollmentTrend />
          <GradeDistribution />
        </div>
        <TableStudentsData />
      </main>
    </div>
  )
}

export default HomePage