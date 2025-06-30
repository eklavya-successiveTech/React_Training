'use client';

import React, { useState, useCallback } from 'react';

const TaskItem = React.memo(({ task, onComplete }) => {
  console.log(`Rendering Task: ${task.text}`);

  return (
    <li style={{ 
      padding: '8px', 
      borderBottom: '1px solid #eee',
      textDecoration: task.completed ? 'line-through' : 'none' 
    }}>
      {task.text}
      <button 
        onClick={() => onComplete(task.id)} 
        style={{ marginLeft: '10px' }}
      >
        {task.completed ? 'Undo' : 'Complete'}
      </button>
    </li>
  );
});

export default function TaskListPage() {
  const initialTasks = [
    { id: 1, text: 'Learn React Hooks', completed: false },
    { id: 2, text: 'Build the Task List component', completed: false },
    { id: 3, text: 'Master useCallback', completed: false },
    { id: 4, text: 'Deploy the application', completed: false },
  ];

  const [tasks, setTasks] = useState(initialTasks);

  const handleCompleteTask = useCallback((taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }, []); 
  return (
    <div style={{ padding: '20px' }}>
      <h1>Question 14: Task List with useCallback</h1>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onComplete={handleCompleteTask}
          />
        ))}
      </ul>
    </div>
  );
}