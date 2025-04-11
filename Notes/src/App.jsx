import React, { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Body2 from "./components/Body2";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  const [select, setSelect] = useState([]);
  const [display, setDisplay] = useState(null);
  const [allNotes, setAllNotes] = useState([
    {
      id: 1,
      tags: [],
      name: "Initial Note",
      place: "Default Place",
      mesg: "Default Message",
    },
  ]);
  const [archiveNotes, setArchiveNotes] = useState([]);
  const [bin, setBin] = useState([]);
  const [showArchived, setShowArchived] = useState(false);
  const [showBin, setShowBin] = useState(false);

  // ✅ Archive Note
  const ArchiveBtn = (note) => {
    setArchiveNotes((prev) => [...prev, { ...note, archived: true }]);
    setAllNotes((prev) => prev.filter((item) => item.id !== note.id));
    setDisplay(null);
  };

  // ✅ Unarchive Note
  const unArchive = (note) => {
    setAllNotes((prev) => [...prev, { ...note, archived: false }]);
    setArchiveNotes((prev) => prev.filter((item) => item.id !== note.id));
    setDisplay(null);
  };

  // ✅ Delete from All Notes or Archive, move to Bin
  const DeleteBtn = (note) => {
    setBin((prev) => [...prev, note]);
    setAllNotes((prev) => prev.filter((n) => n.id !== note.id));
    setArchiveNotes((prev) => prev.filter((n) => n.id !== note.id));
    setDisplay(null);
  };

  // ✅ Permanent delete from Bin
  const permanentDelete = (note) => {
    setBin((prev) => prev.filter((n) => n.id !== note.id));
    setDisplay(null);
  };

  return (
    <div className="App">
      <div className="heading">
        <Header setShowArchived={setShowArchived} setShowBin={setShowBin} />
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
              allNotes={showBin ? bin : showArchived ? archiveNotes : allNotes}
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
              permanentDelete={permanentDelete}
              showArchived={showArchived}
              showBin={showBin}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
