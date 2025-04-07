import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdArchive } from "react-icons/md";
import "./body3.css";

function Body3() {
  return (
    <div>
      <div className="body3-container">
        <button className="body3-button">
          <MdArchive size={25} />
          <p>Archive</p>
        </button>
        <button className="body3-button">
          <AiFillDelete size={25} />
          <p>Delete</p>
        </button>
      </div>
    </div>
  );
}

export default Body3;
