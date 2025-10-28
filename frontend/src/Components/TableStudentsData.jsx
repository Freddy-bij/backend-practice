import { Download, Eye, Search, View, ViewIcon } from "lucide-react"

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
      <div>
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
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
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
                  <td className=" py-3 px-4 text-sm flex items-center gap-1">
                    <Eye className=" h-4 w-4"/>
                    <button>view</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TableStudentsData