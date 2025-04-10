import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdArchive } from "react-icons/md";
import "./body3.css";

function Body3({ archiveNote, deleteNote, display, unArchive, delteArchive }) {
  const archiveNotes = () => {
    archiveNote(display);
  };

  const deleteNotes = () => {
    deleteNote(display.id);
  };

  const unArch = () => {
    unArchive(display);
  };

  const delArch = () => {
    delteArchive(display.id);
    console.log("ok");
  };

  return (
    <div>
      <div className="body3-container">
        <button className="body3-button" onClick={archiveNotes}>
          <MdArchive size={25} />
          <p>Archive</p>
        </button>
        <button className="body3-button" onClick={deleteNotes}>
          <AiFillDelete size={25} />
          <p>Delete</p>
        </button>
        <button className="body3-button" onClick={unArch}>
          <AiFillDelete size={25} />
          <p>unarchive</p>
        </button>
        <button className="body3-button" onClick={delArch}>
          <AiFillDelete size={25} />
          <p>unarchive Delte</p>
        </button>
      </div>
    </div>
  );
}

export default Body3;
