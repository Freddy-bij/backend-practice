
import GradeDistribution from "../Components/GradeDistribution"
import Header from "../Components/Header"
import Recharts from "../Components/Recharts"
import StatsCards from "../Components/StatsCards"
import TableStudentsData from "../Components/TableStudentsData"



const Dashboard = () => {
  return (
    <div className="min-h-screen bg-blue-100 ">
      <Header/>
       <main className="container mx-auto p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-balance">Student Data</h1>
          <p className="text-muted-foreground mt-2 text-gray-500">Comprehensive overview of student information and analytics</p>
        </div>

        <StatsCards />

        <div className="grid gap-6 md:grid-cols-2">
          <Recharts/>
          <GradeDistribution/>
        </div>
        <TableStudentsData/>
      </main>
    </div>
  )
}

export default Dashboard