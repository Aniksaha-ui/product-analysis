import { useEffect, useState } from "react";

const useChart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("charts.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return [data, setData];
};

export default useChart;
