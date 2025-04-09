import React, { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Body2 from "./components/Body2";
import Body3 from "./components/Body3";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  const [notes, setNotes] = useState([]);

  const [select, setSelect] = useState([]);

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
                select={select}
                setSelect={setSelect}
              />
            </div>
            <div className="body2">
              <Body2
                note={notes}
                setNotes={setNotes}
                display={display}
                select={select}
                setSelect={setSelect}
              />
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
