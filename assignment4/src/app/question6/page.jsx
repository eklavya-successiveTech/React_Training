'use client';

import { useState } from 'react';

export default function TodoListPage() {
  const [inputValue, setInputValue] = useState('');

  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();

    if (inputValue.trim() === '') {
      return;
    }

    setTasks(prevTasks => [...prevTasks, inputValue]);

    setInputValue('');
  };

  return (
    <div>
   
      <form onSubmit={handleAddTask}>
        <label htmlFor="task-input">New Task:</label>
        <input
          id="task-input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="e.g., Learn React"
        />
        <button type="submit">Add Task</button>
      </form>

      <hr />

      <h2>My Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}