// ProjectService.js
const ProjectModel = require("../models/Project");

async function createProject(projectData) {
  // Perform data validation, transformation, or additional business logic

  const newProject = new ProjectModel(projectData);
  await newProject.save();
  return newProject;
}

async function getAllProjects() {
  // Retrieve all projects from the database
  const projects = await ProjectModel.find().exec();
  return projects;
}

async function getProjectById(projectId) {
  // Retrieve a project by its ID from the database
  const project = await ProjectModel.findById(projectId);
  return project;
}

async function updateProjectById(projectId, updatedData) {
  // Update a project by its ID in the database
  const updatedProject = await ProjectModel.findByIdAndUpdate(
    projectId,
    updatedData,
    { new: true }
  );
  return updatedProject;
}

async function deleteProjectById(projectId) {
  // Delete a project by its ID from the database
  const deletedProject = await ProjectModel.findByIdAndRemove(projectId);
  return deletedProject;
}

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProjectById,
  deleteProjectById,
};
