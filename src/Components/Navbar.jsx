import React from "react";
import  {Link}  from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <div className="Navbar">
      <div className="Logo">Logo</div>
      <div className="Login">
        <Link to="/Signup">
          <div>Signup</div>
        </Link>
        <Link to="/Login">
          <div>Login</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
