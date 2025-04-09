import React from "react";
import { ImFilesEmpty } from "react-icons/im";
import "./body2.css";

function Body2({ display }) {
  if (!display) {
    return (
      <div>
        <div className="body2Bg">
          <ImFilesEmpty size={250} />
          <p>nothing opened</p>
        </div>
      </div>
    );
  }

  return (
    <div className="display">
      <div className="display-section">
        <span className="displayLabel">Title:</span>
        <div className="DisplayContent">{display.name}</div>
      </div>

      <div className="display-section">
        <span className="displayLabel">Tags:</span>
        <div className="display-tags">
          {display.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="display-section">
        <span className="displayLabel">Place:</span>
        <div className="display-content-text">{display.place}</div>
      </div>

      <div className="display-section">
        <span className="displayLabel">Message:</span>
        <div className="display-mesg-text">{display.mesg}</div>
      </div>
    </div>
  );
}

export default Body2;
