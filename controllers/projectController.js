// ProjectController.js
const ProjectService = require("../services/ProjectService");

async function createProject(req, res) {
  try {
    const projectData = req.body;
    const newProject = await ProjectService.createProject(projectData);
    res.status(201).json(newProject);
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getAllProjects(req, res) {
  try {
    const projects = await ProjectService.getAllProjects();
    res.status(200).json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getProjectById(req, res) {
  try {
    const projectId = req.params.id;
    const project = await ProjectService.getProjectById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json(project);
  } catch (error) {
    console.error("Error fetching project by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function updateProjectById(req, res) {
  try {
    const projectId = req.params.id;
    const updatedData = req.body;
    const updatedProject = await ProjectService.updateProjectById(
      projectId,
      updatedData
    );
    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json(updatedProject);
  } catch (error) {
    console.error("Error updating project by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function deleteProjectById(req, res) {
  try {
    const projectId = req.params.id;
    const deletedProject = await ProjectService.deleteProjectById(projectId);
    if (!deletedProject) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json(deletedProject);
  } catch (error) {
    console.error("Error deleting project by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProjectById,
  deleteProjectById,
};
