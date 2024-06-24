import React from "react";
import { useState } from "react";

function TodoInput({ getData }) {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        placeholder="Enter Todo"
        type="text"
        onChange={(event) => {
          setText(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          getData(text);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;
