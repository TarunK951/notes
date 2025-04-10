import React, { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Body2 from "./components/Body2";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  const [select, setSelect] = useState([]);

  const [display, setDisplay] = useState(null);

  const [allNotes, setAllNotes] = useState([]);

  const [archiveNotes, setArchiveNotes] = useState([]);

  const [showArchived, setShowArchived] = useState(false);

  // archive function

  const ArchiveBtn = (note) => {
    console.log("Archiving note:", note);

    setArchiveNotes((prevArchiveNotes) => {
      const updatedArchive = [...prevArchiveNotes, { ...note, archived: true }];
      console.log("Archive Notes:", updatedArchive);
      return updatedArchive;
    });

    setAllNotes((prevAllNotes) => {
      const updatedAllNotes = prevAllNotes.filter(
        (item) => item.id !== note.id
      );
      console.log("All Notes:", updatedAllNotes);
      return updatedAllNotes;
    });

    setDisplay(null);
  };

  // unArchive function

  const unArchive = (note) => {
    setAllNotes((prevAllNotes) => {
      const updateAllNotes = [...prevAllNotes, { ...note, archived: false }];
      return updateAllNotes;
    });

    setArchiveNotes((prevArchiveNotes) => {
      const updateArchive = prevArchiveNotes.filter(
        (item) => item.id !== note.id
      );
      return updateArchive;
    });
    setDisplay(null);
  };

  // delete buttons

  const DeleteBtn = (noteId) => {
    setAllNotes((prevAllNotes) => prevAllNotes.filter((n) => n.id !== noteId));
    setDisplay(null);
  };

  const delteArchive = (noteId) => {
    setArchiveNotes((prevArchiveNotes) =>
      prevArchiveNotes.filter((n) => n.id !== noteId)
    );
    setDisplay(null);
  };

  return (
    <>
      <div className="App">
        <div className="heading">
          <Header
            allNotes={allNotes}
            setAllNotes={setAllNotes}
            archiveNotes={archiveNotes}
            setArchiveNotes={setArchiveNotes}
            showArchived={showArchived}
            setShowArchived={setShowArchived}
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
                allNotes={showArchived ? archiveNotes : allNotes}
                setAllNotes={setAllNotes}
              />
            </div>
            <div className="body2">
              <Body2
                display={display}
                select={select}
                setSelect={setSelect}
                ArchiveBtn={ArchiveBtn}
                DeleteBtn={DeleteBtn}
                unArchive={unArchive}
                delteArchive={delteArchive}
                showArchived={showArchived}
              />
            </div>
            {/* <div className="body3">
              {/* <Body3
                allNotes={allNotes}
                setAllNotes={setAllNotes}
                archive={archiveNotes}
                setArchive={setArchiveNotes}
                selectedNote={display}
              /> 
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
