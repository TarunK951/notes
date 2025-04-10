import React, { useState } from "react";
import "./body.css";
import Input from "./input";

function Body({
  setDisplay,
  notes,
  setNotes,
  setSelect,
  select,
  allNotes,
  setAllNotes,
}) {
  const [open, setOpen] = useState(false);
  // const [show, setShow] = useState();

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
              <Input
                open={open}
                setOpen={setOpen}
                setNotes={setNotes}
                notes={notes}
                setSelect={setSelect}
                select={select}
                setAllNotes={setAllNotes}
                allNotes={allNotes}
              />
            </div>
          </div>
        )}

        <div className="list-data">
          <div className="data">
            {allNotes.map((note) => {
              return (
                <div
                  className="note"
                  key={note.id}
                  onClick={() => {
                    setDisplay(note), console.log(note);
                  }}
                >
                  <p className="note-title">{note.name}</p>
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
