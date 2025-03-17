import React, { useState } from "react";
import "./css/Projects.css";
import Squares from "./Squres";
import Backbutton from "./Backbutton";
const Projects = () => {
  const [projectDetails, setProjectsDetails] = useState([
    {
      id: 1,
      heading: "Daily-Shop Website",
      description:
        " Introducing Daily-Shop, a responsive e-commerce platform that combines modern design with intuitive functionality. With features like [mobile optimization  secure checkout, product filtering ,100%-Trustable. ], Daily-Shop delivers a superior online   shopping experience",

      image_Url: "dailyshopimage.png",
      gitHubLink: "https://github.com/Vasanthkumar-18/E_Commerce_project",
      viewLink: "https://dailyshop1.netlify.app/",
    },
  ]);

  return (
    <div className="ProjectContainer">
      <Backbutton />
      <Squares
        speed={0.6}
        squareSize={40}
        direction="right" // up, down, left, right, diagonal
        borderColor="#fff"
        hoverFillColor="#fff"
      />

      {projectDetails.map((project) => (
        <div key={project.id} className="ProjectCard">
          <h3>{project.heading}</h3>
          <img src={project.image_Url} alt={project.heading} />

          <p>{project.description}</p>
          <div className="ProjectcardLinks">
            <a
              href={project.gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={project.viewLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
