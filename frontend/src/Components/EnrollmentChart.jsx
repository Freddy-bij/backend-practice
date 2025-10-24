
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const enrollmentData = [
  { month: "Jan", students: 1150 },
  { month: "Feb", students: 1180 },
  { month: "Mar", students: 1200 },
  { month: "Apr", students: 1220 },
  { month: "May", students: 1240 },
  { month: "Jun", students: 1250 },
  { month: "Jul", students: 1260 },
  { month: "Aug", students: 1284 },
]

const EnrollmentChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Enrollment Trend</CardTitle>
        <CardDescription>Student enrollment over the past 8 months</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            students: {
              label: "Students",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={enrollmentData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="month" className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
              <YAxis className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="students"
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--chart-1))", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default EnrollmentChart