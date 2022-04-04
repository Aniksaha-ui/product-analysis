import React from "react";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const Investment = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={500} height={400}>
        <Pie
          name="investment"
          nameKey={data.Investment}
          data={data}
          dataKey="investment"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8884d8"
        />
        <Pie
          name="revenue"
          data={data}
          dataKey="revenue"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />
        <Tooltip></Tooltip>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Investment;
