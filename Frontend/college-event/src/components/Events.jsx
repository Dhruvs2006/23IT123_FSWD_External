import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "Walk", id: uuidv4(), isDone: false },
  ]);
  let [newTodos, setNewTodos] = useState([""]);

  let addNewTask = () => {
    setTodos((prevtodo) => {
      return [...prevtodo, { task: newTodos, id: uuidv4(), isDone: false }];
    });
    setNewTodos("");
  };

  let updateValue = (event) => {
    setNewTodos(event.target.value);
  };

  let deleteTask = (id) => {
    setTodos((prevtodos) => todos.filter((prevtodos) => prevtodos.id != id));
  };

  let uppercaseAll = () => {
    setTodos((prevTodo) =>
      todos.map((prevTodo) => {
        return { ...prevTodo, task: prevTodo.task.toUpperCase() };
      })
    );
  };

  let uppercaseOne = (id) => {
    setTodos((prevTodo) =>
      todos.map((prevTodo) => {
        if (prevTodo.id == id) {
          return { ...prevTodo, task: prevTodo.task.toUpperCase() };
        } else {
          return prevTodo;
        }
      })
    );
  };

  let taskDone = (id) => {
    setTodos(
      todos.map((prevTodo) => {
        if (prevTodo.id == id) {
          return {
            ...prevTodo,
            isDone: true,
          };
        } else {
          return prevTodo;
        }
      })
    );
  };

  let allDone = () => {
    setTodos((prevTodo) =>
      todos.map((prevTodo) => {
        return { ...prevTodo, isDone: true };
      })
    );
  };

  return (
    <>
      <input
        placeholder="Enter Your Event"
        value={newTodos}
        onChange={updateValue}
      ></input>
      <br />
      <button onClick={addNewTask}>Add Event</button>
      <br />
      <br />
      <br />
      <hr />
      <h4>Event List</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>
              {todo.task}
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTask(todo.id)}>Delete</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => uppercaseOne(todo.id)}>Uppercase</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => taskDone(todo.id)}>Done</button>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <button onClick={uppercaseAll}>Convert Upprcase</button>
      <br />
      <br />
      <button onClick={allDone}>All Done</button>
    </>
  );
}
