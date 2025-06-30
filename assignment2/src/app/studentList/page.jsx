"use client"
import React, { useState, useMemo } from 'react';

const initialStudents = ['Alice', 'Bob', 'Charlie'];

function StudentList() {
  const [students, setStudents] = useState(initialStudents);

  const [newStudentName, setNewStudentName] = useState('');
  
  const [counter, setCounter] = useState(0);

  const memoizedStudentList = useMemo(() => {
    console.log('Generating the list of student <li> elements...');
    
    return students.map(student => <li key={student}>{student}</li>);

  }, [students]);

  
  const handleAddStudent = () => {
   
    if (newStudentName.trim() === '') return;

    setStudents([...students, newStudentName]);
    
    setNewStudentName('');
  };

  return (
    <div style={{ border: '2px solid #28A745', padding: '20px', borderRadius: '10px', fontFamily: 'sans-serif' }}>
      <h2>Memoized Student List</h2>
      <p>Open your browser's console to see when the list is re-calculated.</p>
      
      <ul>
        {memoizedStudentList}
      </ul>
      
      <hr />

      <div>
        <input 
          type="text" 
          value={newStudentName}
          onChange={(e) => setNewStudentName(e.target.value)}
          placeholder="New student name"
        />
        <button onClick={handleAddStudent} style={{ marginLeft: '10px' }}>Add Student</button>
      </div>

      <div style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '15px' }}>
        <h4>Demonstration Control</h4>
        <p>This button re-renders the component but doesn't change the student list.</p>
        <button onClick={() => setCounter(counter + 1)}>
          Force Re-render (Counter: {counter})
        </button>
      </div>
    </div>
  );
}

export default StudentList;