import React from "react";

function Body2(props) {
  return (
    <div>
      <div className="body2-container">
        <div className="input">
          {props.notes.map((note) => {
            return (
              <div className="Details" key={note.name}>
                <p className="Details-title">{note.name}</p>
                <p className="Details-tags">{note.age}</p>
                <p className="Details-date">{note.place}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Body2;
