const express = require("express");
const path = require("path");
const productRoutes = require("./routes/ProductRoutes");

const app = express();
const PORT = 3003;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// Middleware to parse form data
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Use product routes
app.use("/", productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});