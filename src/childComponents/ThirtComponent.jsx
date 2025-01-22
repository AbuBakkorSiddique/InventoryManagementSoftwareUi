import '../css/ThirtComponent.css';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts';

const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const lineData = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function ThirtComponent() {
  return (
    <div className="ThirtComponent mt-6 mb-6 shadow-sm">
      <div className="ThirtComponent_left rounded-lg shadow-lg hover:shadow-xl">
        <h1 className="text-lg font-bold mt-4 ml-4 ">Current Download</h1>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              style={{ fontSize: '16px', fontWeight: 'bold' }}
            >
              <tspan x="50%" dy="-0.6em" style={{ fontSize: '14px' }}>
                Total
              </tspan>
              <tspan x="50%" dy="1.2em" style={{ fontSize: '18px', fontWeight: 'bold' }}>
                188,245
              </tspan>
            </text>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>




      <div className="ThirtComponent_right rounded-lg shadow-lg hover:shadow-xl">


      <div>
      <div className=' w-full flex justify-between mt-4 ml-4 mb-4'>
        <h1 className='text-lg font-bold'>Area Installed</h1>
    
        <select name="cars" id="cars">
          <option value="volvo">2020</option>
          <option value="saab">2021</option>
          <option value="mercedes">2022</option>
          <option value="audi">2023</option>
        </select>
      </div>
    </div>


        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line className='text-yellow-500 ' type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line className='text-green-600' type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ThirtComponent;
