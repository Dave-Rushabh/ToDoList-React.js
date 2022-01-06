import React, { useState } from "react";
import Lists from "./Lists";
import "./App.css";

const App = () => {
  const [stored_input_list, inputListAdder] = useState("");
  const [items, setitemes] = useState([]);

  const addItems = (data_added_by_user) => {
    inputListAdder(data_added_by_user.target.value);
  };

  const add_into_todo_list = () => {
    setitemes((exisiting_values) => {
      return [...exisiting_values, stored_input_list];
    });

    inputListAdder("");
  };

  const delete_this_item = (id) => {
    console.log("okay");
    setitemes((exisiting_values) => {
      return exisiting_values.filter((arrayElement, arrayIndex) => {
        return arrayIndex !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <p className="title">To Do List</p>
        <br />
        <div className="center_div">
          <div>
            <input
              className="input_field_styling"
              type="text"
              placeholder="Add items for today"
              onChange={addItems}
              value={stored_input_list}
            />
          </div>
          <div className="add_logo_outer" onClick={add_into_todo_list}>
            <p className="add_logo">+</p>
          </div>
        </div>

        <div className="todolist">
          {/* <div className="delete_button_div">
            <p className="delete_button">Delete</p>
          </div> */}
          <div className="lists">
            {/* <li>{stored_input_list}</li> */}
            {items.map((value, index) => {
              return (
                <>
                  <Lists
                    key={index}
                    val={value}
                    id={index}
                    onSelect={delete_this_item}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
