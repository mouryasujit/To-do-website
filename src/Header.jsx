import React from "react";
import logo from "./images.png";
const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" />
        <h1>Msr Keep</h1>
      </div>
    </>
  );
};
export default Header;
