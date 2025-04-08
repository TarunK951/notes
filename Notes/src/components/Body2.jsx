import React from "react";

function Body2({ display }) {
  return (
    <div>
      <div className="body2-container">
        <div className="input">
          <h2>{display.name}</h2>
        </div>
      </div>
    </div>
  );
}

export default Body2;
