import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";
//import { Line } from "react-chartjs-2";
function Chart({ listBMI }) {

  /*const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(255,228,196,1)",
        borderColor: "rgba(127,255,0,1)"
      }
    ]
  };
  
  return (
    <div>
      <p>helloooooooooooooooooooo</p>
    <Line data={data}/>
    </div>
    
  )*/

  //const data = Object.entries(listBMI).map(([localDate, bmiValues]) => ({ localDate, bmiValues }));
  const data = [
    { "localDate": "2022-03-05", "bmiValues": 50 },
    { "localDate": "march", "bmiValues": 40 },
    { "localDate": "march", "bmiValues": 90 },
    { "localDate": "march", "bmiValues": 200 },
    { "localDate": "march", "bmiValues": 30 }
  ]

  return (
    <LineChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <YAxis dataKey="bmiValues"  />
      <XAxis  dataKey="localDate"/>
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend verticalAlign="top" height={36} />
      <Line  dataKey="localDate" stroke="#8784d8" />
      <Line  type="monotone" dataKey="bmiValues" stroke="#82ca9d" />
    </LineChart>
  );
}
export default Chart;