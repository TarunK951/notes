import React from "react";
import "./body.css";

function Body(props) {
  return (
    <div>
      <div className="bodyContainer">
        <div className="Create-btn">
          <button className="cBtn">
            <p className="cp">+ create New Note</p>
          </button>
        </div>

        <div className="list-data">
          <div className="data">
            {props.notes.map((note) => {
              return (
                <div className="note" key={note.name}>
                  <p>{note.name}</p>
                  <p>{note.age}</p>
                  <p>{note.place}</p>
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
