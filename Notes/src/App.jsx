import React, { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Body2 from "./components/Body2";
import Body3 from "./components/Body3";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  const [select, setSelect] = useState([]);

  const [display, setDisplay] = useState(null);

  const [notes, setNotes] = useState([
    {
      id: 1,
      tags: [],
      name: "create something ",
      place: "hi",
      mesg: "ok",
    },
  ]);

  const [allNotes, setAllNotes] = useState([
    {
      id: 1,
      tags: [],
      name: "all Notes",
      place: "hi",
      mesg: "ok",
    },
  ]);

  const [archiveNotes, setArchiveNotes] = useState([
    {
      id: 1,
      tags: [],
      name: "archive notes",
      place: "hi",
      mesg: "ok",
    },
  ]);

  return (
    <>
      <div className="App">
        <div className="heading">
          <Header
            allNotes={allNotes}
            setAllNotes={setAllNotes}
            archiveNotes={archiveNotes}
            setArchiveNotes={setArchiveNotes}
            setNotes={setNotes}
          />
        </div>

        <div className="main">
          <NavBar />
          <div className="body">
            <div className="body1">
              <Body
                display={display}
                setDisplay={setDisplay}
                select={select}
                setSelect={setSelect}
                allNotes={allNotes}
                setAllNotes={setAllNotes}
                notes={notes}
              />
            </div>
            <div className="body2">
              <Body2 display={display} select={select} setSelect={setSelect} />
            </div>
            <div className="body3">
              <Body3
                allNotes={allNotes}
                setAllNotes={setAllNotes}
                archive={archiveNotes}
                setArchive={setArchiveNotes}
                selectedNote={display}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
