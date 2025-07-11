import React from "react";
import "../assets/styles/Project.scss";
import FolderIcon from "@mui/icons-material/Folder";

const projects = [
  {
    name: "ITE 399",
    link: "https://drive.google.com/drive/folders/1FD9JT4nJf1err-W8pZJ6eO5DBaVWAsdy?usp=drive_link",
    description: "Projects and outputs for ITE 399.",
  },
  {
    name: "ITE 300",
    link: "https://drive.google.com/drive/folders/1xkcumMhb2l7O2RPSp0iqGHjWdu8OvAIs?usp=drive_link",
    description: "Projects and outputs for ITE 300.",
  },
  {
    name: "ITE 298",
    link: "https://drive.google.com/drive/folders/1RqwCSrU_phxAqgFgROIfrG5JEpzSiGfI?usp=drive_link",
    description: "Projects and outputs for ITE 298.",
  },
  {
    name: "ITE 186",
    link: "https://drive.google.com/drive/folders/1gxtrXSkG5KsNzPLRmuFOGfTl9Q9j2ulS?usp=drive_link",
    description: "Projects and outputs for ITE 186.",
  },
  {
    name: "GEN 008",
    link: "https://drive.google.com/drive/folders/1hpdh0hssmJ4AhGOdEMRxCNYN8xZ-W8PE?usp=drive_link",
    description: "Projects and outputs for GEN 008.",
  },
];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Subject Projects (Google Drive)</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project" key={project.name}>
            <a href={project.link} target="_blank" rel="noreferrer">
              <div className="project-icon">
                <FolderIcon fontSize="large" style={{ color: "#5000ca" }} />
              </div>
              <h2 style={{ color: "#222", textAlign: "center" }}>
                {project.name}
              </h2>
            </a>
            <p style={{ color: "#444", textAlign: "center" }}>
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
