import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdArchive } from "react-icons/md";
import "./body3.css";

function Body3({
  archiveNote,
  deleteNote,
  display,
  unArchive,
  delteArchive,
  showArchived,
}) {
  return (
    <div>
      <div className="body3-container">
        {showArchived == true ? (
          <>
            <button className="body3-button" onClick={() => unArchive(display)}>
              <AiFillDelete size={25} />
              <p>Unarchive</p>
            </button>
            <button
              className="body3-button"
              onClick={() => delteArchive(display.id)}
            >
              <AiFillDelete size={25} />
              <p>Unarchive Delete</p>
            </button>
          </>
        ) : (
          <>
            <button
              className="body3-button"
              onClick={() => archiveNote(display)}
            >
              <MdArchive size={25} />
              <p>Archive</p>
            </button>
            <button
              className="body3-button"
              onClick={() => deleteNote(display.id)}
            >
              <AiFillDelete size={25} />
              <p>Delete</p>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Body3;
