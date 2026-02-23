import styled from "@emotion/styled";
import React from "react";
import ReactDOM from "react-dom/client";
import MaterialIcon from "../common/material-icon";
import MenuIcon from "@mui/icons-material/Menu";
import FrameImg from "url:../../utils/images/Frame.png";

const StyledNavBar = styled("div")({
  height: "48px",
  width: "100%",
  padding: "16px",
  backgroundColor: "#f5f5f5",
  borderRadius: "8px",
  ".nav-right": {
    padding: "13.66px  6.83px 13.66px 19.64px",
    display:"flex",
    justifyContent:"center",
  },
});

function Navbar() {
  console.log("here **", FrameImg);
  return (
    <StyledNavBar>
      <div className="nav-right">
        <MaterialIcon
          iconName={MenuIcon}
          label="Open menu"
          iconSize={20}
          buttonSize={40}
          onClick={() => console.log("menu clicked")}
        />
        <img src={FrameImg} alt="logo" />
      </div>
      <div className="nav-middle"></div>
      <div className="nav-left"></div>
    </StyledNavBar>
  );
}

export default Navbar;
