import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <p> Copyright &copy; {year} -by Sujit Mourya</p>
      </footer>
    </>
  );
};
export default Footer;
