import React from "react";
import "./css/About.css";
import Particles from "./Particles";
import Backbutton from "./Backbutton";
const About = () => {
  return (
    <div className="AboutContainer">
      <Backbutton />

      <div className="AboutImage">
        <img src="/aboutImage.webp" alt="" />
      </div>
      <div style={{ width: "100%", height: "600px", position: "absolute" }}>
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={15}
          speed={0.7}
          particleBaseSize={200}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="AboutChild">
        <p>
          I am Vasanth , A fresher full-stack developer with experience in both
          frontend and backend development, specializing in the PERN stack
          (PostgreSQL, Express.js, React, and Node.js) for building web
          applications. Proficient in HTML, CSS, JavaScript, jQuery, and
          Bootstrap to create responsive and user-friendly interfaces. On the
          backend, skilled in developing scalable applications using Node.js,
          Express.js, and PostgreSQL. Strong knowledge of SQL, Git, and GitHub
          for efficient database management and version control.
        </p>
        <p>
          I am always eager to learn, adapt, and solve real-world problems
          through code. My goal is to develop high-performance applications
          while continuously improving my skills in web development, databases,
          and API integration.
        </p>
      </div>
    </div>
  );
};

export default About;
