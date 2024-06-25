const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('database.sqlite');

// db.serialize(() => {
//   db.run("CREATE TABLE products (id INTEGER PRIMARY KEY, name TEXT, price INTEGER, description TEXT)");
//   db.run("INSERT INTO products (name, price, description) VALUES ('商品 1', 1000, '這是商品 1')");
//   db.run("INSERT INTO products (name, price, description) VALUES ('商品 2', 2000, '這是商品 2')");
//   db.run("INSERT INTO products (name, price, description) VALUES ('商品 3', 3000, '這是商品 3')");
// });

// 獲取所有商品
app.get('/api/products', (req, res) => {
  db.all("SELECT * FROM products", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ products: rows });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});