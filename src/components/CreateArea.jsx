import React, { useState } from "react";
import Note from "./Note";

function CreateArea() {
  const [notes, setNotes] = useState({
    title: "",
    content: ""
  });

  const [fullContent, setFullContent] = useState([]);

  function handleNote(event) {
    const { name, value } = event.target;

    setNotes((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  function handleFullContent(e) {
    e.preventDefault();

    setFullContent((prev) => {
      return [...prev, notes];
    });
  }

  function delCon(id) {
    setFullContent((prevList) => {
      return prevList.filter((items, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleNote}
          value={notes.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleNote}
          value={notes.content}
        />
        <button onClick={handleFullContent}>Add</button>
      </form>
      <div className="note">
        {fullContent.map((content, index) => (
          <Note
            key={index}
            id={index}
            title={content.title}
            content={content.content}
            deleteContent={delCon}
          />
        ))}
      </div>
    </div>
  );
}

export default CreateArea;
