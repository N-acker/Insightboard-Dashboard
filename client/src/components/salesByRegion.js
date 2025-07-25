import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function SalesByRegion() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // axios.get("http://localhost:4000/api/sales/regions")
    axios.get('https://officedepot-dashboard-production.up.railway.app/api/sales/regions')
      .then(res => {
        setChartData({
          labels: res.data.map(row => row.region),
          datasets: [{
            label: "Total Sales",
            data: res.data.map(row => Number(row.total_sales)),
            backgroundColor: ["#4dc9f6", "#f67019", "#f53794", "#537bc4", "#acc236"],
          }]
        });
      });
  }, []);

  if (!chartData) return <div>Loading region chart...</div>;

  return (
    <div style={{ height: "250px"  }}>
      <h3>Sales by Region</h3>
      <Pie data={chartData} style={{marginLeft: "100px"}}/>
    </div>
  );
}

export default SalesByRegion;
