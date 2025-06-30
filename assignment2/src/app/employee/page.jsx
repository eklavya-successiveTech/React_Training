"use client"
import React, { useState, useMemo } from 'react';

const initialEmployees = [
  { id: 1, name: 'Alice', salary: 80000 },
  { id: 2, name: 'Bob', salary: 95000 },
  { id: 3, name: 'Charlie', salary: 105000 },
  { id: 4, name: 'Diana', salary: 120000 },
];

function EmployeeSalary() {
  const [employees, setEmployees] = useState(initialEmployees);

  const [theme, setTheme] = useState('light');

  const averageSalary = useMemo(() => {
    console.log('Calculating average salary...');

    if (employees.length === 0) return 0;

    const totalSalary = employees.reduce((accumulator, employee) => {
      return accumulator + employee.salary;
    }, 0);
    return totalSalary / employees.length;

  }, [employees]); 
  const handleGiveRaise = () => {
    setEmployees(
      employees.map(emp => ({
        ...emp,
        salary: emp.salary + 5000, 
      }))
    );
  };
  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  const componentStyle = {
    backgroundColor: theme === 'light' ? '#FFF' : '#333',
    color: theme === 'light' ? '#333' : '#FFF',
    padding: '20px',
    borderRadius: '10px',
    border: '2px solid #007BFF',
    fontFamily: 'sans-serif',
    transition: 'background-color 0.3s, color 0.3s'
  };

  return (
    <div style={componentStyle}>
      <h2>Employee Salary Dashboard</h2>
      <p>Open the console to see when the average salary is recalculated.</p>
      
      <h3>Employee List:</h3>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            {emp.name}: ${emp.salary.toLocaleString()}
          </li>
        ))}
      </ul>
      
      <hr />

      <h3 style={{ fontSize: '1.5em' }}>
        Average Salary: ${averageSalary.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </h3>

      <div style={{ marginTop: '20px' }}>
        <button onClick={handleGiveRaise}>Give Everyone a Raise</button>
        <button onClick={toggleTheme} style={{ marginLeft: '10px' }}>
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

export default EmployeeSalary;