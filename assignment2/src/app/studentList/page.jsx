import React, { useState, useMemo } from 'react';

function StudentList() {
  const studentNames = ['Alice', 'Bob', 'Charlie'];
  
  const [students, setStudents] = useState(studentNames);
  
  const memoizedStudentList = useMemo(() => {
    return students;
  }, [students]);
  
  const handleAddStudent = () => {
    setStudents([...students, 'Sham']);
  };
  
  return (
    <div>
      <ul>
        {memoizedStudentList.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
      <button onClick={handleAddStudent}>Add Student</button>
    </div>
  );
}

export default StudentList;