import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Node from "./Node";

const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  console.log("list");
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const App = () => {
  const [addItem, Setitem] = useState(getLocalItems());
  const AddNote = (Note) => {
    Setitem((prevData) => {
      return [...prevData, Note];
    });
  };
  const onDelete = (id) => {
    Setitem((prevData) =>
      prevData.filter((curr, index) => {
        return index !== id;
      })
    );
  };
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(addItem));
  }, [addItem]);
  return (
    <>
      <Header />
      <CreateNote passNote={AddNote} />
      {addItem.map((val, index) => {
        return (
          <Node
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}

      <Footer />
    </>
  );
};
export default App;
