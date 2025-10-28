import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
  { month: "Jan", students: 1150 },
  { month: "Feb", students: 1180 },
  { month: "Mar", students: 1200 },
  { month: "Apr", students: 1220 },
  { month: "May", students: 1240 },
  { month: "Jun", students: 1250 },
  { month: "Jul", students: 1260 },
  { month: "Aug", students: 1284 },
]

const EnrollmentTrend = () => {
  return (
     <div className='bg-white rounded-2xl py-4 px-4'>
      <div className=''>
        <h1 className='text-xl font-bold'>Enrollment Trend</h1>
        <p className=' text-gray-500'>Student enrollment over the past 8 months</p>
      </div>
      <div className='m-4 h-64'> 
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <Line type="monotone" dataKey="students" stroke='#2196F3'  strokeWidth={2} />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey='month' />
            <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} />
            <Tooltip />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>

 
  )
}

export default EnrollmentTrend