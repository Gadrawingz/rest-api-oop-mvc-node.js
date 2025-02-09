const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "g!1234",
  database: "api_database",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Promisify the pool for async/await support
const promisePool = pool.promise();

class Product {
  // 01. Create a new Product
  static async create(product) {
    const { name, price, description } = product;
    const [result] = await promisePool.query(
      "INSERT INTO products (name, price, description) VALUES (?, ?, ?)",
      [name, price, description]
    );
    return result.insertId;
  }

  // 02. Get all products
  static async findAll() {
    const [rows] = await promisePool.query("SELECT * FROM products");
    return rows;
  }
}

module.exports = Product;
