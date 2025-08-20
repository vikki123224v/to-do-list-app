import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (input.trim() === "") return alert("Task cannot be empty!");
    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter a new task"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((task, idx) => (
          <li
            key={idx}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              color: task.completed ? "gray" : "black"
            }}
          >
            {task.text}
            <button onClick={() => toggleComplete(idx)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => deleteTask(idx)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;