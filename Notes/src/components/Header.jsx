import React from "react";
import { IoHome } from "react-icons/io5";
import { PiArchiveDuotone } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./head.css";
import TagsContainer from "./TagsContainer";

function Header({ setShowArchived, setShowBin }) {
  const allnotes = () => {
    setShowArchived(false);
    setShowBin(false);
  };

  const archived = () => {
    setShowArchived(true);
    setShowBin(false);
  };

  const bin = () => {
    setShowBin(true);
    setShowArchived(false);
  };

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
            <div>
              <button className="containers" onClick={allnotes}>
                <IoHome size={25} />
                <p className="allNotes">All Notes</p>
              </button>
            </div>
            <div>
              <button className="containers" onClick={archived}>
                <PiArchiveDuotone size={25} />
                <p className="allNotes">Archived Notes</p>
              </button>
            </div>
            <div>
              <button className="containers" onClick={bin}>
                <RiDeleteBin6Line size={25} />
                <p className="allNotes">Recycle Bin</p>
              </button>
            </div>
          </div>
          <hr />
          <div className="tags-container">
            <TagsContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
