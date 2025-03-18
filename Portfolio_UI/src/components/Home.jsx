import React from "react";
import SplashCursor from "./SplashCursor";
import "./css/Home.css";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { IoMailUnreadOutline } from "react-icons/io5";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="HomeContainer">
      <div className="homeBodyImage">
        <img src="/image.webp" alt="" />
      </div>

      <div className="homeLeftHalf">
        <div className="leftHalfTop">
          <a href="/CV.pdf" download="">
            <p>Resume</p>
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
          <SplashCursor />
        </div>

        <div className="leftHalfIconContanier">
          <a
            href="https://github.com/Vasanthkumar-18/Portfolio-react/"
            target="_blank"
          >
            <FaGithub className="leftHalfIcons" size={"25px"} />
          </a>

          <a
            href="https://www.linkedin.com/in/vasanth-kumar-9671a82a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            <BsLinkedin className="leftHalfIcons" size={"25px"} />
          </a>
          <div className="leftHalfLine"></div>
        </div>
      </div>
      <div className="homeRightHalf">
        <div className="rightHalfTop">
          <p onClick={() => navigate("/about")}>About</p>
        </div>
        <div className="rightHalfLeftSection">
          <a
            href="mailto:vasanthdukelover143@gmail.com"
            onClick={() => console.log("clicked")}
          >
            <IoMailUnreadOutline size={"30px"} color="rebeccapurple" />
          </a>
          <p onClick={() => navigate("/skills")}>Skills</p>
          <p onClick={() => navigate("/projects")}>projects</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
