import React from "react";
import "./input.css";

function Input(props) {
  return (
    <div className="inputPopUp">
      <div className="popUp">
        {/* Close Button */}
        <button
          className="closeBtn"
          onClick={() => {
            props.setOpen(!open);
          }}
        >
          &times;
        </button>

        <div className="inputs">
          <div>
            <h2>Enter Title</h2>
            <input type="text" placeholder="Title" />
          </div>
          <div>
            <h2>Select Tags</h2>
            <input type="text" placeholder="Tags" />
          </div>
          <div>
            <h2>Note Here</h2>
            <input type="text" placeholder="Note" />
          </div>

          {/* Submit Button */}
          <button
            className="submitBtn"
            onClick={() => {
              props.setOpen(!open);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;
