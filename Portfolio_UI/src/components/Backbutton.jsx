import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const BackButtonStyle = {
  width: "100%",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: "1px",
};

const Backbutton = () => {
  const navigate = useNavigate();
  return (
    <div className="BackbuttonContainer" style={BackButtonStyle}>
      <IoMdArrowRoundBack
        size={"25px"}
        style={{
          backgroundColor: "white",
          borderRadius: "50%",
          zIndex: "100",
        }}
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default Backbutton;
