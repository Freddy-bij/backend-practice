
import { Plus, X } from "lucide-react"
import EnrollmentTrend from "../Components/EnrollmentTrend"
import GradeDistribution from "../Components/GradeDistribution"
import Header from "../Components/Header"
import StatsCards from "../Components/StatsCards"
import TableStudentsData from "../Components/TableStudentsData"
import { useState } from "react"



import Select from 'react-select';


const optionsA = [
  { value: 'male', label: 'Male' },
  { value: 'memale', label: 'Female' },
]

const optionsB = [
  { value: 'grade 10th', label: 'Grade 10th' },
  { value: 'grade 11th', label: 'Grade 11th' },
  { value: 'grade 12th', label: 'Grade 12th' }
]

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  
};
const groupBadgeStyles = {
  
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};


const formatGroupLabel = () => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

const HomePage = () => {
  const [isAddStudentDialog, setIsAddStudentDialog] = useState(false)
  return (
    <div className="  relative ">
      
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
        {isAddStudentDialog && (
          <div className=" flex flex-col  items-center   w-4/5 mx-auto p-6  absolute h-[60%]   z-1000">
          
           
            <div className="bg-white rounded-2xl p-8 shadow-lg">

              <div className="animate-fade-in">
                       <div className='flex justify-between'>
                   <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Student</h1>
                  <X className='w-4 h-4 hover:text-blue-400 ' onClick={() => setIsAddStudentDialog(false)} />
                </div>
              <form className="space-y-8">
                {/* Personal Information Section */}
                
                <div>
                  <h2 className="text-xl font-semibold text-[#37507E] mb-4 flex items-center">
                    <div className="w-1 h-6 bg-gradient-to-b from-[#37507E] to-[#FF6B6B] rounded-full mr-3"></div>
                    Personal Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 flex flex-col">
                      <label htmlFor="firstName" className="text-gray-700">
                        First Name *
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        placeholder="Enter first name"
                      
                        className="border-gray-300 focus:border-[#37507E] focus:ring-[#37507E] border outline-none rounded"
                      />
                    </div>
                    <div className="space-y-2 flex flex-col">
                      <label htmlFor="lastName" className="text-gray-700">
                        Last Name *
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        placeholder="Enter last name"
                      
                        className="border-gray-300 focus:border-[#37507E]  focus:ring-[#37507E] border outline-none rounded"
                      />
                    </div>
                    <div className="space-y-2 flex flex-col">
                      <label htmlFor="dateOfBirth" className="text-gray-700">
                        Date of Birth *
                      </label>
                      <input
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        
                        className="border-gray-300 focus:border-[#37507E] focus:ring-[#37507E] border outline-none rounded"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="gender" className="text-gray-700">
                        Gender *
                      </label>
                      <Select
                           options={optionsA}
                    formatGroupLabel={formatGroupLabel}
                      />

                    
                        
                    </div>
                  </div>
                </div>

                {/* Contact Information Section */}
                <div>
                  <h2 className="text-xl font-semibold text-[#37507E] mb-4 flex items-center">
                    <div className="w-1 h-6 bg-gradient-to-b from-[#37507E] to-[#FF6B6B] rounded-full mr-3"></div>
                    Contact Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 flex flex-col">
                      <label htmlFor="email" className="text-gray-700">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        
                        placeholder="student@example.com"
                        className="border-gray-300 focus:border-[#37507E] focus:ring-[#37507E] border outline-none rounded"
                      />
                    </div>
                    <div className="space-y-2 flex flex-col">
                      <label htmlFor="phone" className="text-gray-700">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="border-gray-300 focus:border-[#37507E] focus:ring-[#37507E] border outline-none rounded"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2 flex flex-col">
                      <label htmlFor="address" className="text-gray-700">
                        Home Address *
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        placeholder="Enter full address"
                        rows={3}
                        className="border-gray-300 focus:border-[#37507E] focus:ring-[#37507E] border outline-none rounded"
                      />
                    </div>
                  </div>
                </div>

                {/* Parent/Guardian Information Section */}
                <div>
                  <h2 className="text-xl font-semibold text-[#37507E] mb-4 flex items-center">
                    <div className="w-1 h-6 bg-gradient-to-b from-[#37507E] to-[#FF6B6B] rounded-full mr-3"></div>
                    Parent/Guardian Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 flex flex-col">
                      <label htmlFor="parentName" className="text-gray-700">
                        Parent/Guardian Name *
                      </label>
                      <input
                        id="parentName"
                        name="parentName"
                        placeholder="Enter parent/guardian name"
                        className="border-gray-300 focus:border-[#37507E] focus:ring-[#37507E] border outline-none rounded"
                      />
                    </div>
                    <div className="space-y-2 flex flex-col">
                      <label htmlFor="parentPhone" className="text-gray-700">
                        Parent Phone Number *
                      </label>
                      <input
                        id="parentPhone"
                        name="parentPhone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="border-gray-300 focus:border-[#37507E] focus:ring-[#37507E] border outline-none rounded"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2 flex flex-col">
                      <label htmlFor="parentEmail" className="text-gray-700">
                        Parent Email Address *
                      </label>
                      <input
                        id="parentEmail"
                        name="parentEmail"
                        type="email"
                        placeholder="parent@example.com"
                        className="border-gray-300 focus:border-[#37507E] focus:ring-[#37507E] border outline-none rounded"
                      />
                    </div>
                  </div>
                </div>

                {/* Academic Information Section */}
                <div>
                  <h2 className="text-xl font-semibold text-[#37507E] mb-4 flex items-center">
                    <div className="w-1 h-6 bg-gradient-to-b from-[#37507E] to-[#FF6B6B] rounded-full mr-3"></div>
                    Academic Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="grade" className="text-gray-700">
                        Grade/Class *
                      </label>
                      <Select 
                              options={optionsB}
                    formatGroupLabel={formatGroupLabel}
                      />
                     
                    </div>
                    <div className="space-y-2 flex flex-col">
                      <label htmlFor="enrollmentDate" className="text-gray-700">
                        Enrollment Date *
                      </label>
                      <input
                        id="enrollmentDate"
                        name="enrollmentDate"
                        type="date"
                        className="border-gray-300 focus:border-[#37507E] focus:ring-[#37507E] border outline-none rounded"
                      />
                    </div>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    variant="outline"
                    
                    className="border-gray-300 text-gray-700 hover:bg-gray-100"
                  >
                    Clear Form
                  </button>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#37507E] to-[#37507E]/80 hover:from-[#37507E]/90 hover:to-[#37507E]/70 text-white"
                  >
                    Register Student
                  </button>
                </div>
              </form>
            </div>
          </div>

          </div>

        )}
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