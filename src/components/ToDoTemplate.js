import React from "react";
import "./ToDoTemplate.scss";

const ToDoTemplate = ({ children }) => {
  return (
    <div className="ToDoTemplate">
      <div className="app-title bagel-fat-one-regular">To Do List</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default ToDoTemplate;
