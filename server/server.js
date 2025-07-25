require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());

// Postgres connection setup
const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT, // optional, default is 5432
});


// Sales by region
app.get('/api/sales/regions', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT region, SUM(amount) AS total_sales
            FROM sales
            GROUP BY region
            ORDER BY total_sales DESC
        `);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database query error' });
    }
});

// Sales by month
app.get('/api/sales/monthly', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT TO_CHAR(DATE_TRUNC('month', sale_date), 'YYYY-MM') AS month,
                   SUM(amount) AS total_sales
            FROM sales
            WHERE sale_date >= '2025-01-01'
            GROUP BY month
            ORDER BY month
        `);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database query error' });
    }
});

// Top 5 sales reps
app.get('/api/sales/top-reps', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT
              rep_name,
              SUM(amount) AS total_sales,
              STRING_AGG(DISTINCT product, ', ') AS products_sold
            FROM sales
            GROUP BY rep_name
            ORDER BY total_sales DESC
            LIMIT 5
        `);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database query error' });
    }
});

// Revenue by product
app.get('/api/sales/products', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT product, SUM(amount) AS total_sales
            FROM sales
            GROUP BY product
            ORDER BY total_sales DESC
        `);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database query error' });
    }
});


// Below are the scripts for the build folder and connecting it to the server

const path = require('path');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Handles any requests that don't match the API routes
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));