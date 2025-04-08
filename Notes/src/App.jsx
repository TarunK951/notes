import React, { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Body2 from "./components/Body2";
import Body3 from "./components/Body3";
import Header from "./components/header";
import NavBar from "./components/NavBar";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      name: "hello",
      age: "21",
      place: "hyd",
      mesg: "what all the content you wawnt to write and tell can be pasted here and will be sent in to this",
    },
    {
      id: 2,
      name: "jii...",
      age: "22",
      place: "amp",
      mesg: "what all the content you wawnt to write and tell can be pasted here and will be sent in to this",
    },
    {
      id: 3,
      name: "hello ther is something to do lorem  ",
      age: "25",
      place: "hyd",
      mesg: "what all the content you wawnt to write and tell can be pasted here and will be sent in to this",
    },
  ]);

  const [display, setDisplay] = useState(null);

  return (
    <>
      <div className="App">
        <div className="heading">
          <Header />
        </div>

        <div className="main">
          <NavBar />
          <div className="body">
            <div className="body1">
              <Body
                notes={notes}
                setNotes={setNotes}
                display={display}
                setDisplay={setDisplay}
              />
            </div>
            <div className="body2">
              <Body2 notes={notes} setNotes={setNotes} display={display} />
            </div>
            <div className="body3">
              <Body3 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
