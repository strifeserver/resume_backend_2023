// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const fs = require("fs");
const path = require("path");

app.use(cors());

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB Connection
const db_name = "portfolio_db";
const password = `jeanius42"123`;
mongoose.connect(
  `mongodb+srv://mongouser:` +
    password +
    `@cluster0.lcxk2.mongodb.net/` +
    db_name +
    `?retryWrites=true&w=majority
`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Routes
// const projectRoutes = require("./routes/projectRoutes");
// app.use("/api/projects", projectRoutes);
// Include the routes.js file as middleware
// const routes = require('./routes/routes');
// app.use(routes);

// Dynamic route loading
const routesDirectory = path.join(__dirname, "routes");
fs.readdirSync(routesDirectory).forEach((file) => {
  if (file.endsWith(".js")) {
    const routePath = path.join(routesDirectory, file);
    const route = require(routePath);
    const routeName = path.basename(file, ".js");
    const endpoint = `/api/${routeName}`;

    app.use(endpoint, route);
  }
});

// console.log(projectRoutes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
