import React from "react";
import { GrAddCircle } from "react-icons/gr";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-light header">
      <div className="container-fluid">
        <Link to={"/"} className="home">
          STC
        </Link>
        <Link to={"/addDevice"}>
          <GrAddCircle className={"header-icon"} />
        </Link>
      </div>
    </nav>
  );
};
export default Header;
