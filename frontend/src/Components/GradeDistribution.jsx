import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const gradeData = [
    { grade: "A", count: 342 },
    { grade: "B", count: 456 },
    { grade: "C", count: 298 },
    { grade: "D", count: 124 },
    { grade: "F", count: 64 },
]

const GradeDistribution = () => {
    return (
        <div className='bg-white rounded-2xl py-4 '>
            <div className='px-5'>
                <h1 className='text-xl font-bold'>Grade Distribution</h1>
                <p className='text-md text-gray-500'>Current semester grade breakdown</p>
            </div>
            <div className='mt-4 h-64 mr-6'>
                <ResponsiveContainer className="w-full h-full">
                    <BarChart data={gradeData}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                        <XAxis dataKey="grade" className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                        <YAxis className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                        <Tooltip/>
                        <Bar dataKey="count" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
                        <Legend/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default GradeDistribution