import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./css/BackButton.css"
const BackButtonStyle = {


};

const Backbutton = () => {
  const navigate = useNavigate();
  return (
    <div className="BackbuttonContainer" style={BackButtonStyle}>
      <IoMdArrowRoundBack
      className="backButtonIcon"
        size={"25px"}
       
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default Backbutton;
