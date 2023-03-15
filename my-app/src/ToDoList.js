import React, { useState } from "react";

function ToDoList() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    setTodoList([...todoList, newTask]);
  };

  const deleteTask = (taskName) => {
    setTodoList(todoList.filter((task) => task !== taskName));
  };

  return (
    <div className="theList">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list"></div>
      {todoList.map((task) => {
        return (
          <div>
            <h1>{task}</h1>
            <button onClick={() => deleteTask(task)}> X </button>
          </div>
        );
      })}
    </div>
  );
}

export default ToDoList;
