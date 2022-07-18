import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ListOfItems from "./ListOfItems";

const toDo = () => {
  const [item, setItem] = useState(" ");
  const [newItem, setNewItem] = useState([]);

  const myEvent = (event) => {
    setItem(event.target.value);
  };

  const handleClick = () => {
    setNewItem((prevValue) => {
      return [...prevValue, item];
    });
    setItem(" ");
  };

  function deleteItem(id) {
    console.log("deleted");
    setNewItem((prevValue) => {
      return prevValue.filter((newItem, index) => {
        return index !== id;
      });
    });
  }

  function deleteAll() {
    setNewItem([]);
    console.log("all items cleared");
  }

  return (
    <div>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To-Do List</h1>
          <br />
          <input
            type="text"
            placeholder="Add item"
            onChange={myEvent}
            value={item}
          />
          <Button className="newbtn" onClick={handleClick}>
            <AddIcon />
          </Button>
          <br />
         
          <Button className="dlt" onClick={deleteAll} variant="contained">
            Delete all
          </Button>
          

          <ol>
            {newItem.map((val, index) => {
              return (
                <div>
                  {/* <input type = "checkbox" name="ListItems" value= "ListItems" class="btn" /> */}

                  <ListOfItems
                    key={index}
                    id={index}
                    text={val}
                    onChecked={deleteItem}
                  />
                  ;

                </div>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};
export default toDo;
