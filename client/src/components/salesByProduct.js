import React, { useEffect, useState } from "react";
import axios from "axios";

function SalesByProduct() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:4000/api/sales/products")
      .then(res => {
        setData(res.data);
      });
  }, []);

  if (!data) return <div>Loading product sales...</div>;

  return (
    <div style={{ width: "100%" }}>
      <h3>Sales by Product</h3>
      <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Total Sales</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.product}>
              <td>{row.product}</td>
              <td>${Number(row.total_sales).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalesByProduct;
