import React from "react";
import "./App.css";

const Lists = (props) => {
  return (
    <>
      <div className="container">
        <div
          className="delete_button_div"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          <p className="delete_button">Delete</p>
        </div>

        <li className="li">{props.val}</li>
      </div>
    </>
  );
};

export default Lists;
