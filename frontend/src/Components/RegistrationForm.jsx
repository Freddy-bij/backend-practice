import { X } from "lucide-react";
import { useContext, useState } from "react";
import Select from "react-select"
import { filsContent } from "../context/context";

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

const RegistrationForm = () => {
    const { isAddStudentDialog , setIsAddStudentDialog} = useContext(filsContent)
  return (
    <div>

     
        <div className="bg-white rounded-2xl p-8 shadow-lg  ">

              <div className="animate-fade-in">
                       <div className='flex justify-between'>
                   <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Student</h1>
                  <X className='w-4 h-4 hover:text-blue-400 ' onClick={() => setIsAddStudentDialog()} />
                </div>
              <form className="space-y-8">
                
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
                      
                        className="border-gray-300 focus:border-[#37507E]  placeholder-gray-400 text-sm  py-1.5 px-3 focus:ring-[#37507E] border outline-blue-400 rounded"
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
                      
                        className="border-gray-300 focus:border-[#37507E]  placeholder-gray-400 text-sm  py-1.5 px-3 focus:ring-[#37507E] border outline-blue-400 rounded"
                      />
                    </div>

                   
                    <div className="space-y-2 flex flex-col ">
                      <label htmlFor="dateOfBirth" className="text-gray-700">
                        Date of Birth *
                      </label>
                      <input
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        
                        className="border-gray-300 focus:border-[#37507E]  placeholder-gray-400 text-sm  py-1.5 px-3 focus:ring-[#37507E] border outline-blue-400 rounded"
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
                        className="border-gray-300 focus:border-[#37507E]  placeholder-gray-400 text-sm  py-1.5 px-3 focus:ring-[#37507E] border outline-blue-400 rounded"
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
                        className="border-gray-300 focus:border-[#37507E] py-1.5  placeholder-gray-400 text-sm  px-3 focus:ring-[#37507E] border outline-blue-400 rounded"
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
                        className="border-gray-300 focus:border-[#37507E] py-1.5 px-3  placeholder-gray-400 text-sm  focus:ring-[#37507E] border outline-blue-400 rounded"
                      />
                    </div>
                  </div>
                </div>

           
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
                        className="border-gray-300 focus:border-[#37507E]  placeholder-gray-400 text-sm  py-1.5 px-3 focus:ring-[#37507E] border outline-blue-400 rounded"
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
                        className="border-gray-300 focus:border-[#37507E] py-1.5  placeholder-gray-400 text-sm  px-3 focus:ring-[#37507E] border outline-none rounded"
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
                        className="border-gray-300 focus:border-[#37507E] py-1.5 placeholder-gray-400 text-sm px-3 focus:ring-[#37507E] border outline-none rounded"
                      />
                    </div>
                  </div>
                </div>

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
                        className="border-gray-300 focus:border-[#37507E] py-1.5 px-3  border outline-blue-400 rounded"
                      />
                    </div>
                  </div>
                </div>

            
                <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    variant="outline"
                    
                    className="border-gray-300 text-gray-700 px-2 py-1 rounded  hover:bg-gray-100"
                  >
                    Clear Form
                  </button>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#37507E] to-[#37507E]/80 hover:from-[#37507E]/90 hover:to-[#37507E]/70 px-2 py-1 rounded text-white"
                  >
                    Register Student
                  </button>
                </div>
              </form>
            </div>
          </div>
     
            
    </div>
  )
}

export default RegistrationForm