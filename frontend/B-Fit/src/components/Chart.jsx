import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";
//import { Line } from "react-chartjs-2";
function Chart({ listBMI }) {

  return (
    <LineChart
      width={1000}
      height={400}
      data={listBMI}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      style={{ backgroundColor: 'white' }}
    >
      <YAxis dataKey="bmiValues"  />
      <XAxis  dataKey="localDate"/>
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend verticalAlign="top" height={36} />
      <Line  type="linear" dataKey="bmiValues" stroke="#F4A460" strokeWidth={4}  />
    </LineChart>
  );
}
export default Chart;
// <Line  dataKey="localDate" stroke="#8784d8" />