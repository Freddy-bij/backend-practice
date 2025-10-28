
import { Plus, X } from "lucide-react"
import EnrollmentTrend from "../Components/EnrollmentTrend"
import GradeDistribution from "../Components/GradeDistribution"
import Header from "../Components/Header"
import StatsCards from "../Components/StatsCards"
import TableStudentsData from "../Components/TableStudentsData"
import { useState } from "react"



import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
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

const Dashboard = () => {
  const [isAddStudentDialog, setIsAddStudentDialog] = useState(false)
  return (
    <div className="min-h-screen bg-gray-200 relative ">
      <Header />
      <main className="container mx-auto p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-balance">Student Data</h1>
            <p className="text-muted-foreground mt-2 text-gray-500">Comprehensive overview of student information and analytics</p>
          </div>

          <div className="flex items-center gap-2 bg-blue-400 text-white rounded-md  px-4 py-1.5" onClick={() => setIsAddStudentDialog(true)}>
            <Plus className="h-4 w-4" />
            <h1>Add Student</h1>
          </div>
        </div>
        {isAddStudentDialog && (
          <div className=" flex flex-col  items-center   w-4/5 mx-auto p-6  absolute h-[60%]   z-1000">
            <div>

              <div className='bg-white p-4 rounded-xl border border-gray-400 fixed-'>
                <div className='flex justify-between'>
                  <h1 className="text-xl font-bold">Add New Student</h1>
                  <X className='w-4 h-4 ' onClick={() => setIsAddStudentDialog(false)} />
                </div>

                <p className="text-sm text-gray-500">Enter the student information below to add them to the system.</p>
                <form >
                  <div className="flex gap-2">
                    <div>
                      <label>First Name</label><br></br>
                      <input type="text" className="border border-gray-400 rounded" />
                    </div>
                    <div>
                      <label>First Name</label><br></br>
                      <input type="text" className="border border-gray-400 rounded" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label>Email</label>
                    <input type="text" className="border border-gray-400 rounded" />
                  </div>
                  <div className="flex flex-col">
                    <label>Phone Number</label>
                    <input type="text" className="border border-gray-400 rounded" />
                  </div>
                  <div className="flex gap-20 py-2">
                    <div>
                      <Select

                    options={options}
                    formatGroupLabel={formatGroupLabel}
                  />
                    </div>
                      <div>
                      <Select

                    options={options}
                    formatGroupLabel={formatGroupLabel}
                  />
                    </div>

                  </div>

                  <div className="flex flex-col">
                    <label>Adress</label>
                   <input type="text" className="border border-gray-400 rounded" />
                  </div>
                  <div className="flex items-center justify-end py-2 gap-2">
                    <button className="bg-white border border-gray-400 rounded px-1 py-0.5">Cancel</button>
                    <button className="bg-blue-400 border border-gray-400 rounded px-1 py-0.5 text-white" > Add Student</button>
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

export default Dashboard