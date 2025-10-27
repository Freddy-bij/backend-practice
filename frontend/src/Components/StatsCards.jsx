import { Users, UserCheck, TrendingUp, Award } from "lucide-react"

const stats = [
  {
    title: "Total Students",
    value: "1,284",
    change: "+12.5%",
    icon: Users,
    trend: "up",
  },
  {
    title: "Attendance Rate",
    value: "94.2%",
    change: "+2.1%",
    icon: UserCheck,
    trend: "up",
  },
  {
    title: "Average GPA",
    value: "3.45",
    change: "+0.15",
    icon: TrendingUp,
    trend: "up",
  },
  {
    title: "Honor Students",
    value: "342",
    change: "+8.3%",
    icon: Award,
    trend: "up",
  },
]

const StatsCards = () => {
  return (
   <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <div key={stat.title} className="bg-blue-50 p-5 rounded-xl text-gray-500">
            <div className="flex flex-row items-center justify-between pb-2">
              <h1 className="text-sm font-medium text-muted-foreground">{stat.title}</h1>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="pt-6">
              <div className="text-2xl font-bold text-black">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1 ">
                <span className="text-accent">{stat.change}</span> from last month
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default StatsCards