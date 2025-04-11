import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdArchive } from "react-icons/md";
import "./body3.css";

function Body3({
  archiveNote,
  deleteNote,
  display,
  unArchive,
  permanentDelete,
  showArchived,
  showBin,
}) {
  return (
    <div>
      <div className="body3-container">
        {showBin ? (
          // ✅ If in Recycle Bin, show permanent delete
          <button
            className="body3-button"
            onClick={() => permanentDelete(display)}
          >
            <AiFillDelete size={25} />
            <p>Delete Permanently</p>
          </button>
        ) : showArchived ? (
          <>
            <button className="body3-button" onClick={() => unArchive(display)}>
              <MdArchive size={25} />
              <p>Unarchive</p>
            </button>
            <button
              className="body3-button"
              onClick={() => deleteNote(display)}
            >
              <AiFillDelete size={25} />
              <p>Delete to Bin</p>
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
              onClick={() => deleteNote(display)}
            >
              <AiFillDelete size={25} />
              <p>Delete to Bin</p>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Body3;
