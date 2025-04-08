import React, { useState } from "react";
import "./input.css";

function Input({ setOpen, notes, setNotes }) {
  //
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [place, setPlace] = useState("");
  const [mesg, setMesg] = useState("");
  //
  const add = () => {
    setNotes([
      ...notes,
      {
        id: notes.length + 1,
        name: title,
        age: tags,
        place: place,
        mesg: mesg,
      },
    ]);
    setOpen(!open);
    setTags("");
    setPlace("");
    setTitle("");
    setMesg("");
  };
  //
  return (
    <div className="inputPopUp">
      <div className="popUp">
        {/* Close Button */}
        <button
          className="closeBtn"
          onClick={() => {
            setOpen(!open);
          }}
        >
          &times;
        </button>

        <div className="inputs">
          <div>
            <h2>Enter Title</h2>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <h2>Select Tags</h2>
            <input
              type="text"
              placeholder="Tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
          <div>
            <h2>place</h2>
            <input
              type="text"
              placeholder="Note"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
          </div>
          <div>
            <h2>mesg</h2>
            <input
              type="text"
              placeholder="Note"
              value={mesg}
              onChange={(e) => setMesg(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button className="submitBtn" onClick={add}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;
