import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [item, setitem] = useState([]);
  function onADD(note) {
    setitem((prev) => {
      return [...prev, note];
    });
  }
  function onDel(id) {
    setitem((prev) => {
      return prev.filter((arri, index) => {
        return !index == id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onadd={onADD} />
      {item.map((itemv, index) => {
        return (
          <Note
            ondele={onDel}
            key={index}
            id={index}
            title={itemv.title}
            content={itemv.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
