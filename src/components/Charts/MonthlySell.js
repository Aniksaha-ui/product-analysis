import React from "react";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MonthlySell = (props) => {
  const { data } = props;
  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <LineChart width={300} height={100} data={data}>
        <Line type="monotone" dataKey="sell" stroke="#8884d8" strokeWidth={2} />
        <XAxis dataKey="month" />
        <YAxis />
        <Legend />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MonthlySell;
