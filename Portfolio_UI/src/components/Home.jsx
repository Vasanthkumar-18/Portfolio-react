import React from "react";
import SplashCursor from "./SplashCursor";
import "./css/Home.css";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
// import { IoHome } from "react-icons/io5";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="HomeContainer">
      <div className="homeBodyImage">
        <img src="/image.webp" alt="" />
      </div>
      {/* <SplashCursor /> */}
      <div className="homeLeftHalf">
        <div className="leftHalfTop">
          <p>Resume</p>

          <a href="mailto: vasanthdukelover143@email.com" target="_blank">
            Get In Touch
          </a>
        </div>
        <div className="leftHalfName">
          <p>V</p>
          <p>A</p>
          <p>S</p>
          <p>A</p>
          <p>N</p>
          <p>T</p>
          <p>H</p>
        </div>

        <div className="leftHalfIconContanier">
          <FaGithub className="icons" size={"25px"} />
          <a href="https://www.linkedin.com/in/vasanth-kumar-9671a82a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <BsLinkedin className="icons" size={"25px"} />
          </a>
          <div className="leftHalfLine"></div>
        </div>
      </div>
      <div className="homeRightHalf">
        <div className="rightHalfTop">
          <p onClick={() => navigate("/about")}>About</p>
        </div>
        <div className="rightHalfLeftSection">
          <p onClick={() => navigate("/skills")}>Skills</p>
          <p onClick={() => navigate("/projects")}>project</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
