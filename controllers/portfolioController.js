const ProjectService = require("../services/ProjectService");

async function portfolio(req, res) {
  let returns = [];

  try {
    const projects = await ProjectService.getAllProjects();

    const returns = {
      name: "Jean-Louis S. Mendoza",
      projects: projects,
    };

    res.status(200).json(returns);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  portfolio,
};
