import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const CreateNote = (props) => {
  const [Note, SetNote] = useState({
    title: "",
    content: "",
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    SetNote((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  };
  const AddEvent = () => {
    props.passNote(Note);
    SetNote({
      title: "",
      content: "",
    });
  };
  return (
    <>
      <div className="main_note">
        <form>
          <input
            type="text"
            placeholder=" 🎫 Title  🎫"
            name="title"
            value={Note.title}
            autoComplete="off"
            onChange={inputEvent}
          ></input>
          <textarea
            rows="5"
            column=""
            name="content"
            value={Note.content}
            placeholder=" ✍️  Add to Remember... ✍️"
            onChange={inputEvent}
          ></textarea>
          <Button onClick={AddEvent}>
            <AddIcon className="plus" fontSize="large" />
          </Button>
        </form>
      </div>
    </>
  );
};
export default CreateNote;
