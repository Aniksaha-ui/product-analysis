import React from "react";

import useChart from "../../Hooks/useChart";
import Investment from "../Charts/Investment";
import InvestmentBarchart from "../Charts/InvestmentBarchart";
import InvestmentVsRevenue from "../Charts/InvestmentVsRevenue";
import MonthlySell from "../Charts/MonthlySell";

const Dashboard = () => {
  const [data, setData] = useChart();
  return (
    <div class="container mt-5">
      <div class="row row-cols-lg-2 row-cols-md-2 row-cols-1 g-2 mt-5">
        <div class="col">
          <h3>Month Wise Sell</h3>
          <MonthlySell data={data} />
        </div>
        <div class="col">
          <Investment data={data} />
        </div>

        <div className="col">
          <h3>Investment vs revenue</h3>
          <InvestmentVsRevenue data={data} />
        </div>

        <div className="col">
          <h3>Investment vs revenue</h3>
          <InvestmentBarchart data={data} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
