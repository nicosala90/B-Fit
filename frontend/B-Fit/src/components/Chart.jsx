import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";
function Chart() {

    const data =  [
        {name: 'Page A', uv: 400},
         {name: 'Page B', uv: 600},
         {name: 'Page C', uv: 800}];
    return (
        <LineChart width={730} height={250} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend verticalAlign="top" height={36}/>
        <Line name="pv of pages" type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line name="uv of pages" type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
      
    )
}
export default Chart;