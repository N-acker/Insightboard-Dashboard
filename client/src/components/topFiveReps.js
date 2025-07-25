import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
    }
  }
};

function TopFiveReps() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // axios.get("http://localhost:4000/api/sales/top-reps")
    axios.get('https://officedepot-dashboard-production.up.railway.app/api/sales/top-reps')
      .then(res => {
        setChartData({
          labels: res.data.map(row => `${row.rep_name} (${row.products_sold})`),
          datasets: [{
            label: "Sales Made",
            data: res.data.map(row => Number(row.total_sales)),
            backgroundColor: [
              "#537bc4", "#f67019", "#4dc9f6", "#f53794", "#acc236"
            ],
          }]
        });
      });
  }, []);

  if (!chartData) return <div>Loading top reps...</div>;

  return (
    <div style={{ width: "100%" }}>
      <h3>Top 5 Sales Reps</h3>
      <Bar data={chartData} options={options}/>
    </div>
  );
}

export default TopFiveReps;
