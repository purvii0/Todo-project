import axios from "axios";

function addTodos(todos) {
  axios
    .post("http://localhost:8000/todos", todos)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function getTodos() {
  axios
    .get(`http://localhost:8000/todos`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function DeleteTodos(id) {
  axios
    .delete(`http://localhost:8000/todos/${id}`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export { addTodos, getTodos, DeleteTodos };
