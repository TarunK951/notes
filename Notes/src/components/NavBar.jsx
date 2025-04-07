import React from "react";
import { CiSettings } from "react-icons/ci";
import "./navBar.css";

function NavBar() {
  return (
    <div>
      <div className="nav">
        <p>All Notes</p>
        <div className="search">
          <input type="text" />
          <button className="settings">
            <CiSettings size={25} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
