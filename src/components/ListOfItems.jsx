import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

 

const ListOfItems = (props) => {
  const [line,setLine]= useState(false);
  const cut=()=>{
     setLine(true);
  };
  console.log(line);
  return (
    <div className="todo_style">
      <span  onClick={cut}>
        <li style={{textDecoration: line ? "line-through":"none"}} >
          {props.text}
        </li>
      </span>
      <span
        onClick={() => {
          props.onChecked(props.id);
        }}
      >
        <DeleteIcon className="deleteIcon" />
      </span>
    </div>
  );
};
export default ListOfItems;
