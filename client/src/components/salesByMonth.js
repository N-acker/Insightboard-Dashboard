import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    legend: { display: false },
    title: { display: false },
  },
  scales: {
    y: {
      title: {
        display: true,
        text: 'Revenue ($)',
        font: { size: 14, weight: "bold" }
      }
    },
    x: {
      title: {
        display: true,
        text: 'Month',
        font: { size: 14, weight: "bold" }
      }
    }
  }
};


function SalesByMonth() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // axios.get("http://localhost:4000/api/sales/monthly")
    axios.get('https://officedepot-dashboard-production.up.railway.app/api/sales/monthly')
      .then(res => {
        setChartData({
          labels: res.data.map(row => row.month),
          datasets: [{
            label: "Sales by Month",
            data: res.data.map(row => Number(row.total_sales)),
            fill: false,
            borderColor: "rgba(75,192,192,1)",
            tension: 0.2,
          }]
        });
      });
  }, []);

  if (!chartData) return <div>Loading monthly sales...</div>;

  return (
    <div style={{ width: "100%" }}>
      <h3>Sales by Month</h3>
      <Line data={chartData} options={options} />
    </div>
  );
}

export default SalesByMonth;
