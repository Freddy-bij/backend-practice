import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

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

const Recharts = () => {
  return (
    <div className='bg-white  rounded-2xl'>
      <div>
        <h1>Enrollment Trend</h1>
        <p>Student enrollment over the past 8 months</p>
      </div>
      <div className=' m-4 '>
        <div>
           <LineChart  data={data}>
      <Line
        type="monotone"
        dataKey="students"
        stroke='#2196F3'
        strokeWidth={2}
      />

      <CartesianGrid strokeDasharray="3 3 " />
      <XAxis dataKey='month' />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
        </div>
       
      </div>
   

    </div>
 
  )
}

export default Recharts