import React from "react";
import { FaTag } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { PiArchiveDuotone } from "react-icons/pi";
import "./head.css";

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
          <p className="notesLogo">Notes</p>
        </div>
        <div className="head-content">
          <div className="head-main">
            <div className="containers">
              <IoHome size={18} />
              <p className="allNotes">All Notes</p>
            </div>
            <div className="containers">
              <PiArchiveDuotone size={18} />
              <p className="allNotes">Archived Notes</p>
            </div>
          </div>
          <hr />
          <div className="tags-container">
            <p className="tag-title">Tags</p>
            <div className="tags">
              <div className="tag">
                <FaTag />
                <p>Work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
