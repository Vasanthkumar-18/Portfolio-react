import React from "react";
import "./css/Skills.css";
import Threads from "./Threads";
import Backbutton from "./Backbutton";
const Skills = () => {
  return (
    <div className="skillContainer">
      <Backbutton />
      {/* <div className="frontendSkills">
        <p>I Enjoy writting clean code and Creating Responsive website</p>
        <p>
          <strong>Skills:</strong> HTML, CSS, JavaScript, React.Js, Bootsrap5,
          Redux
        </p>
        <p>
          <strong>Tools:</strong> vscode, GitHub
        </p>
      </div>
      <div className="backendSkills">
        <p>
          I Enjoy writting clean code and Building Scalable Server Side
          applications
        </p>
        <p>
          <strong>Skills:</strong> Node.js, Express.Js, Sql, Postgresql
        </p>
        <p>
          <strong>Tools:</strong> Postman
        </p>
      </div> */}
      <div className="SkillsParent">
        <div className="frontendSkills">
          <center>
            <h3>FRONTEND</h3>
          </center>
          <p>I enjoy writing clean code and creating responsive websites.</p>
          <strong>Skills:</strong>
          <p className="spaceSkills">
            HTML, CSS, JavaScript, React.js, Bootstrap 5, Redux
          </p>
          <strong>Tools:</strong>
          <p className="spaceSkills">VS Code, GitHub</p>
        </div>
        <div className="backendSkills">
          <center>
            {" "}
            <h3>BACKEND</h3>
          </center>
          <p>
            I enjoy building the behind-the-scenes parts of websites to ensure
            smooth performance and developing scalable server-side applications.
          </p>
          <strong>Skills:</strong>
          <p className="spaceSkills">Node.js, Express.js, SQL, PostgreSQL</p>
          <strong>Tools:</strong>
          <p className="spaceSkills">Postman</p>
        </div>
      </div>
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        <Threads amplitude={1.1} distance={0} enableMouseInteraction={true} />
      </div>
      

    </div>
  );
};

export default Skills;
