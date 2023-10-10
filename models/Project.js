// models/project.js

const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  project_name: {
    type: String,
    required: true,
    minlength: 3,
  },
  project_description: {
    type: String,
    required: true,
    minlength: 3,
  },
  languages: String,
  order_by: {
    type: Number,
    default: 0,
  },
  company: String,
});

module.exports = mongoose.model("Project", projectSchema);
