import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    if (taskInput.trim() === '') return;
    setTasks([...tasks, taskInput]);
    setTaskInput('');
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = newText;
    setTasks(updatedTasks);
  };

  const handleDeleteAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <div>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={handleAddTask}>Add</button>
        <button onClick={handleDeleteAllTasks}>Delete All</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleEditTask(index, prompt('Edit task:', task))}>Edit</button>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;