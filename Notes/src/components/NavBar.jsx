import React, { useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import "./navBar.css";

function NavBar() {
  const [image, setImage] = useState(true);
  const change = () => {
    setImage(!image);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div>
      <div className="nav">
        <p>All Notes</p>
        <div className="search">
          <input type="text" placeholder="Search by title, or tags...." />
          <button
            className={`settings ${image ? "dark" : "light"}`}
            onClick={change}
          >
            {image ? <CiLight size={25} /> : <CiDark size={25} color="white" />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
