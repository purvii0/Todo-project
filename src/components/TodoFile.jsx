import { useState } from "react";
import TodoInput from "./TodoInputFile";
import TodoItem from "./TodoItem";
import { nanoid } from "nanoid";
import "./TodoFile.css";

function Todo() {
  const [todosList, setTodosList] = useState([]);

  const getData = (data) => {
    const payload = {
      title: data,
      status: false,
      id: nanoid(5),
    };
    setTodosList([...todosList, payload]);
  };

  const handleToggle = (id) => {
    setTodosList(
      todosList.map((e) => (e.id === id ? { ...e, status: !e.status } : e))
    );
  };

  const handleDelete = (id) => {
    setTodosList(todosList.filter((e) => (e.id === id ? false : true)));
  };

  return (
    <div>
      <TodoInput getData={getData} />
      {todosList.map((e) => {
        return (
          <div>
            <TodoItem
              item={e}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />
          </div>
        );
      })}
    </div>
  );
}
export default Todo;
