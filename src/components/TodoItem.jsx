import React from "react";
import "./TodoItem.css";

function TodoItem({ item, handleToggle, handleDelete }) {
  return (
    <div className="todo-item">
      <div className="todo-item-title">{item.title}</div>
      <div className={`todo-item-status ${item.status ? "done" : "not-done"}`}>
        {item.status ? "Done" : "Not Done"}
      </div>
      <div className="todo-item-buttons">
        <button
          onClick={() => {
            handleToggle(item.id);
          }}
        >
          Toggle
        </button>
        <button
          className="delete-btn"
          onClick={() => {
            handleDelete(item.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
