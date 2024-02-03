import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src="s1.svg" alt="" width={50} height={50} />
      <nav className="nav">
        <ul className="text text-size">
          <li>
            {" "}
            <Link to={"/searchstates"}>Search for States</Link>
          </li>
          <li>
            <Link to={"/searchcounties"}>Search for Country</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
