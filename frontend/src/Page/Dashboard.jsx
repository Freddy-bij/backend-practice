import Header from "../Components/Header"
import StatsCards from "../Components/StatsCards"


const Dashboard = () => {
  return (
    <div className="min-h-screen bg-blue-200 ">
      <Header/>
       <main className="container mx-auto p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-balance">Student Data</h1>
          <p className="text-muted-foreground mt-2">Comprehensive overview of student information and analytics</p>
        </div>

        <StatsCards />

        <div className="grid gap-6 md:grid-cols-2">
          {/* <EnrollmentChart /> */}
          {/* <GradeDistributionChart /> */}
        </div>

        {/* <StudentTable /> */}
      </main>
    </div>
  )
}

export default Dashboard