import React, { useState } from "react";
import { FaTags } from "react-icons/fa6";
import "./input.css";

function Input({ setOpen, allNotes, setAllNotes, open }) {
  //
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [place, setPlace] = useState("");
  const [mesg, setMesg] = useState("");
  const [activeTags, setActiveTags] = useState([]);
  //
  const add = () => {
    setAllNotes([
      ...allNotes,
      {
        id: new Date(),
        tags: Array.isArray(tags) ? tags : [],
        name: title === "" ? "empty" : title,
        place: place === "" ? "empty" : place,
        mesg: mesg === "" ? "nothing written" : mesg,
      },
    ]);
    setOpen(!open);
    setTags([]);
    setPlace("");
    setTitle("");
    setMesg("");
  };
  //
  const tagged = (tag) => {
    setTags((prevTags) => {
      if (activeTags.includes(tag)) {
        setActiveTags(activeTags.filter((t) => t !== tag)); // remove if already active
      } else {
        setActiveTags([...activeTags, tag]); // add if not active
      }

      if (prevTags.includes(tag)) {
        return prevTags.filter((t) => t !== tag);
      } else {
        return [...prevTags, tag];
      }
    });
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
            <div className="tag-buttons">
              <button
                className={`btn-tag ${
                  activeTags.includes("work") ? "active" : ""
                }`}
                onClick={() => tagged("work")}
              >
                <FaTags /> Work
              </button>
              <button
                className={`btn-tag ${
                  activeTags.includes("food") ? "active" : ""
                }`}
                onClick={() => tagged("food")}
              >
                <FaTags /> Food
              </button>
              <button
                className={`btn-tag ${
                  activeTags.includes("sport") ? "active" : ""
                }`}
                onClick={() => tagged("sport")}
              >
                <FaTags /> Sport
              </button>
              <button
                className={`btn-tag ${
                  activeTags.includes("health") ? "active" : ""
                }`}
                onClick={() => tagged("health")}
              >
                <FaTags /> Health
              </button>
              <button
                className={`btn-tag ${
                  activeTags.includes("personal") ? "active" : ""
                }`}
                onClick={() => tagged("personal")}
              >
                <FaTags /> Personal
              </button>
              <button
                className={`btn-tag ${
                  activeTags.includes("travel") ? "active" : ""
                }`}
                onClick={() => tagged("travel")}
              >
                <FaTags /> Travel
              </button>
              <button
                className={`btn-tag ${
                  activeTags.includes("recipes") ? "active" : ""
                }`}
                onClick={() => tagged("recipes")}
              >
                <FaTags /> Recipes
              </button>
              <button
                className={`btn-tag ${
                  activeTags.includes("dev") ? "active" : ""
                }`}
                onClick={() => tagged("dev")}
              >
                <FaTags /> Dev
              </button>
            </div>
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
            <textarea
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
