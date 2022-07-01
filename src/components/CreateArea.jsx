import React, { useState } from "react";

function CreateArea(props) {
  var [input, setInput] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    var { name, value } = event.target;
    setInput({
      ...input,
      [name]: value
    });
  }

  return (
    <div>
      <form>
        <input
          value={input.title}
          onChange={handleChange}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={input.content}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(event) => {
            props.handleClick(input);
            setInput({
              title: "",
              content: ""
            });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
