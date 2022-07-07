import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

const Node = (props) => {
  const DeleteNode = () => {
    props.deleteItem(props.id);
  };

  return (
    <>
      <div className="note">
        <h1> ♐ {props.title}</h1>
        <br />
        <p> 📫 {props.content}</p>
        <Button onClick={DeleteNode}>
          <DeleteOutlineIcon className="Delete-icons" />
        </Button>
      </div>
    </>
  );
};
export default Node;
