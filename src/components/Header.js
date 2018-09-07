import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>BuzzWork Assessment</h1>

      <ul className="header__links">
        <li>
          <Link to="/">Exercise 1</Link>
        </li>

        <li>
          <Link to="/exercise2">Exercise 2</Link>
        </li>
        <b />
      </ul>
    </header>
  );
}

export default Header;
