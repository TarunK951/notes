import React from "react";
import "./body2.css";

function Body2({ display }) {
  if (!display) {
    return <div>No item selected</div>;
  }

  return (
    <div>
      <div className="display">
        <p className="display-title"> {display.name}</p>
        <p className="display-tags"> {display.age}</p>
        <p className="display-content"> {display.place}</p>
        <p className="display-mesg"> {display.mesg}</p>
      </div>
    </div>
  );
}

export default Body2;
