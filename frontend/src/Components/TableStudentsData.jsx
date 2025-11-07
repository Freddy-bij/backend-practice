import { Download, Eye, Search, Section, View, ViewIcon } from "lucide-react"
import { useState } from "react"
import { Label } from "recharts"

const students = [
  { id: "STU001", name: "Emma Johnson", grade: "12", gpa: 3.85, attendance: 96, status: "Active" },
  { id: "STU002", name: "Liam Smith", grade: "11", gpa: 3.62, attendance: 94, status: "Active" },
  { id: "STU003", name: "Olivia Brown", grade: "12", gpa: 3.91, attendance: 98, status: "Active" },
  { id: "STU004", name: "Noah Davis", grade: "10", gpa: 3.45, attendance: 85, status: "Active" },
  { id: "STU005", name: "Ava Wilson", grade: "11", gpa: 3.78, attendance: 95, status: "Active" },
  { id: "STU006", name: "Ethan Martinez", grade: "12", gpa: 3.55, attendance: 89, status: "Warning" },
  { id: "STU007", name: "Sophia Anderson", grade: "10", gpa: 3.92, attendance: 97, status: "Active" },
  { id: "STU008", name: "Mason Taylor", grade: "11", gpa: 3.38, attendance: 91, status: "Active" },
]

const TableStudentsData = () => {
  const [activeTab , setActiveTable] = useState('s1')

  const handleTabClick = (section) => {
     setActiveTable(section)
  }

   const tabItems =[
    {id: "S1" ,  label: "S1" , active: activeTab === "s1" , url: "/" , section: "s1"},
    {id: "S2" ,  label: "S2" , active: activeTab === "s2" , url: "s2" , section: "s1"},
    {id: "S3" ,  label: "S3" , active: activeTab === "s3" , url: "s3" , section: "s1"},
    {id: "S4" ,  label: "S4" , active: activeTab === "s4" , url: "s4" , section: "s1"},
    {id: "S5" ,  label: "S5" , active: activeTab === "s5" , url: "s5" , section: "s1"},
    {id: "S6" ,  label: "S6" , active: activeTab === "s6" , url: "s6" , section: "s1"},
 
   ]

 const renderTabItem = ()  => {
   switch(activeTab){
       case 's2':
        return (
          <div className="overflow-x-auto border rounded-xl border-gray-500 mt-2">
            <table className="w-full">
              <thead>
                 <tr className="border-b ">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Student ID</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Name</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Grade</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">GPA</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Attendance</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Action</th>
              </tr>
              </thead>
                
            </table>
          </div>
        )
        case 's3':
        return (
           <div className="overflow-x-auto border rounded-xl border-gray-500 mt-2">
            <table className="w-full">
              <thead>
                 <tr className="border-b ">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Student ID</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Name</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Grade</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">GPA</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Attendance</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Action</th>
              </tr>
              </thead>
                
            </table>
          </div>
        )
        case 's4':
        return (
           <div className="overflow-x-auto border rounded-xl border-gray-500 mt-2">
            <table className="w-full">
              <thead>
                 <tr className="border-b ">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Student ID</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Name</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Grade</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">GPA</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Attendance</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Action</th>
              </tr>
              </thead>
                
            </table>
          </div>
        )
        case 's5':
        return (
           <div className="overflow-x-auto border rounded-xl border-gray-500 mt-2">
            <table className="w-full">
              <thead>
                 <tr className="border-b ">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Student ID</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Name</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Grade</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">GPA</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Attendance</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Action</th>
              </tr>
              </thead>
                
            </table>
          </div>
        )
        case 's6':
        return (
         <div className="overflow-x-auto border rounded-xl border-gray-500 mt-2">
            <table className="w-full">
              <thead>
                 <tr className="border-b ">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Student ID</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Name</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Grade</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">GPA</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Attendance</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Action</th>
              </tr>
              </thead>
                
            </table>
          </div>
        )

        default:
          return (
             <div className="overflow-x-auto border rounded-xl border-gray-500 mt-2">
          <table className="w-full  ">
            <thead>
              <tr className="border-b ">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Student ID</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Name</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Grade</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">GPA</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Attendance</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-b hover:bg-muted/50">
                  <td className="py-3 px-4 text-sm font-mono">{student.id}</td>
                  <td className="py-3 px-4 text-sm font-medium">{student.name}</td>
                  <td className="py-3 px-4 text-sm">{student.grade}</td>
                  <td className={`py-3 px-4 text-sm ${student.gpa >= 3.7 ? "text-green-600" : "text-blue-500"}`}>{student.gpa.toFixed(2)}</td>
                  <td className=
                  "py-3 px-4 text-sm"><span className={`${student.attendance >= 90 ? "bg-green-200/60 text-green-600 border border-green-400 py-0.5 px-3 rounded-md" : "bg-red-200  text-red-600 border border-red-400 py-0.5 px-3 rounded-md"}`}>{student.attendance}%</span></td>
                  <td className="py-3 px-4 text-sm">
                    <button 
                    variant={student.status === "Active" ? "default" : "destructive"} 
                    className={` ${student.status === "Active" ? "text-xs bg-blue-700 rounded px-1 py-0.5 text-white " : "bg-red-600 rounded px-1 py-0.5"}`}>
                      {student.status}
                    </button>
                  </td>
                  <td className=" py-3 px-4 text-sm   " >
                    <div className="flex items-center gap-1 hover:bg-blue-400 hover:px-1 hover:py-0.5 rounded hover:text-white ">

                       <Eye className=" h-4 w-4"/>
                    <button>view</button>
                    </div>
                   
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
          )

       
   }
 }

  
  return (
       <div className="bg-white shadow-md p-8 rounded-2xl">
      <div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-xl font-bold">Student Records</h1>
            <p className=" text-gray-500">Detailed information for all enrolled students</p>
          </div>
          <div className="flex gap-2">
            <div className="relative flex md:flex-initial">
              <Search className="absolute left-2.5 top-1.5 h-4 w-4 text-muted-foreground text-gray-500" />
              <input type="search" placeholder="Search students..." className="pl-8 md:w-[300px] border border-gray-500 shadow-sm outline-none rounded py-0.5 placeholder-gray-500" />
            </div>
            <button variant="outline" size="icon">
              <Download className="h-4 w-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <div>
          <h2 className="font-semibold mt-6">Total Students: {students.length}</h2>
        </div>
         <div className="bg-gray-800 text-white font-bold px-4 py-2 rounded-xl ">
             <div className="flex justify-between gap-3 ">
          {tabItems.map((item) =>(
        
                <button
                onClick={() => handleTabClick(item.id.toLocaleLowerCase())}
                className={` w-full ${item.active ? 'bg-blue-400' : ''}  px-4 py-2 rounded-lg `}
           >
            <div>{item.label}</div>
          </button>
     
      
           
          ))}
           </div>
         
          
         </div>
       <div>
        {renderTabItem()}
       </div>
      </div>
    </div>
  )
}

export default TableStudentsData