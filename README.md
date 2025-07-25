# 🏢 Office Depot Sales Dashboard

A fullstack dashboard app for visualizing sales data by region, month, sales rep, and product — powered by **Node.js, Express, PostgreSQL, React, and Chart.js**.

<img width="1084" height="853" alt="image" src="https://github.com/user-attachments/assets/b7ed061f-b55d-4348-83a9-175387882c84" />


---

## 🚀 Features

- **Pie Chart:** Total sales by region
- **Line Chart:** Sales over time (month-to-month)
- **Bar Chart:** Top 5 sales reps, with products sold
- **Table:** Revenue breakdown by product
- **Modern 2x2 Dashboard Layout**
- **PostgreSQL** backend — real relational data!
- **Secure configuration** via `.env` file (never expose credentials)
- **Ready for deployment on Railway or any Node/Express host**

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express, PostgreSQL (`pg`)
- **Frontend:** React, Chart.js (`react-chartjs-2`), Axios
- **Deployment:** Railway (or any Node server)
- **Other:** dotenv for config, modern CSS grid layout

---

## 📦 Getting Started

### 1. **Clone the Repo**

```bash
git clone https://github.com/your-username/office-depot-dashboard.git
cd office-depot-dashboard
```

### 2. **Set Up Environment Variables**

Create a .env file in the root (never commit secrets!):
```bash
PG_USER=your_pg_user
PG_HOST=your_pg_host
PG_DATABASE=your_pg_database
PG_PASSWORD=your_pg_password
PG_PORT=5432
```

### 3. **Install Dependencies**

**Client**
```bash
npm install chart.js react-chartjs-2 axios
```
**Server**
```bash
npm install express cors pg dotenv
```

### 4. **Prepare Your Database**

- Create a Postgres database named salesdb.
- Run the SQL in setup.sql (or manually create the sales table and seed dummy data).

### 5. **Start Up**

**Frontend**
```bash
npm start (and open up in http://localhost:3000)
or
npm build (copy build folder and paste into server folder)
```
**Backend**
```bash
node server
```
- Visit http://localhost:4000

---

## 📊 API Endpoints

- GET /api/sales/regions — Sales by region
- GET /api/sales/monthly — Sales by month
- GET /api/sales/top-reps — Top 5 reps, with products sold
- GET /api/sales/products — Sales by product


