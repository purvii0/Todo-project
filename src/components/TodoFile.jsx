import { useState } from "react";
import TodoInput from "./TodoInputFile";
import TodoItem from "./TodoItem";
import { nanoid } from "nanoid";
import axios from "axios";
import "./Todo.css";
import { useEffect } from "react";

function Todo() {
  const [todosList, setTodosList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log("Mounted");
    axios
      .get(`http://localhost:8000/todos?_page=${page}&_per_page=3`)
      .then(function (response) {
        setTodosList(response.data.data);
      });
    return () => {
      console.log("Unmounted");
    };
  }, [page]);

  function addTodos(todos) {
    axios
      .post("http://localhost:8000/todos", todos)
      .then(function (response) {
        setTodosList([...todosList, response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function DeleteTodos(id) {
    axios
      .delete(`http://localhost:8000/todos/${id}`)
      .then(function (response) {
        setTodosList(todosList.filter((e) => e.id !== id));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function updateTodos(id) {
    const newStatus = todosList.find((e) => e.id === id)?.status ? false : true;
    axios
      .patch(`http://localhost:8000/todos/${id}`, { status: newStatus })
      .then(function (response) {
        setTodosList(
          todosList.map((e) => (e.id === id ? { ...e, status: !e.status } : e))
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const getData = (data) => {
    const payload = {
      title: data,
      status: false,
    };
    addTodos(payload);
  };

  const handleToggle = (id) => {
    updateTodos(id);
  };

  const handleDelete = (id) => {
    DeleteTodos(id);
  };

  return (
    <div className="todo-container">
      <TodoInput getData={getData} />
      {todosList.map((e) => {
        return (
          <div className="todo-item" key={e.id}>
            <TodoItem
              item={e}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />
          </div>
        );
      })}
      <button
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
}
export default Todo;
