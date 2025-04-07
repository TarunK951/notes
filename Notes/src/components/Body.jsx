import React, { useState } from "react";
import "./body.css";
import Input from "./input";

function Body(props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="bodyContainer">
        <div className="Create-btn">
          <button
            className="cBtn"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <p className="cp">+ create New Note</p>
          </button>
        </div>

        {open && (
          <div className="inputPopUp">
            <div className="popUp">
              <Input open={open} setOpen={setOpen} />
            </div>
          </div>
        )}

        <div className="list-data">
          <div className="data">
            {props.notes.map((note) => {
              return (
                <div className="note" key={note.name}>
                  <p className="note-title">{note.name}</p>
                  <p className="note-tags">{note.age}</p>
                  <p className="note-date">{note.place}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
