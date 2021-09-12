import React, { useState } from "react";

function CreateArea(props) {
  const [note, setnote] = useState({
    title: "",
    content: "",
  });
  function handletitbo(event) {
    const { name, value } = event.target;
    setnote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function onadd(event) {
    props.onadd(note);
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input onChange={handletitbo} name="title" placeholder="Title" />
        <textarea
          onChange={handletitbo}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={onadd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
