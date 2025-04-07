import React from "react";
import { CiSettings } from "react-icons/ci";
import "./navBar.css";

function NavBar() {
  return (
    <div>
      <div className="nav">
        <p>All Notes</p>
        <div className="search">
          <input type="text" placeholder="Search by title, or tags...." />
          <button className="settings">
            <CiSettings size={40} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
