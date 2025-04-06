import React from "react";
import "./all.css";

function Header() {
  return (
    <div>
      <div className="header">
        <div className="header-logo">
          <img
            className="logo"
            src="https://img.icons8.com/?size=100&id=kgTtmFTRbaRx&format=png&color=000000"
            alt=""
          />
          <p>Notes</p>
        </div>
        <div className="head-content">
          <div className="main">
            <div className="containers">
              <img src="" alt="" />
              <p>All Notes</p>
            </div>
            <div className="containers">
              <img src="" alt="" />
              <p>Archived Notes</p>
            </div>
          </div>
          <div className="tags">
            <p>tags</p>
            <p>tags</p>
            <p>tags</p>
            <p>tags</p>
            <p>tags</p>
            <p>tags</p>
            <p>tags</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
