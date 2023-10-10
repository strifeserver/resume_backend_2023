// routes/projectRoutes.js
const express = require("express");
const router = express.Router();
const portfolioController = require("../controllers/portfolioController");

// Define your project routes here
router.get("/", portfolioController.portfolio);

module.exports = router;
