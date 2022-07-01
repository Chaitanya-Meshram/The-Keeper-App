import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  var [notes, setNotes] = useState([]);

  function handleClick(input) {
    setNotes([...notes, input]);
  }

  function deleteNote(id) {
    setNotes((prevValue) => {
      return prevValue.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea handleClick={handleClick} />
      {notes.map((note, index) => {
        return (
          <Note
            deleteNote={deleteNote}
            key={index}
            id={index}
            title={note.title}
            content={note.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
