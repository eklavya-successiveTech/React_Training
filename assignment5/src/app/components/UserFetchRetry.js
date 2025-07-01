'use client'; 

import { useState } from 'react';
import axios from 'axios';

function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h2>{user.name}</h2>
          <p>Email: <a href={`mailto:${user.email}`}>{user.email}</a></p>
        </li>
      ))}
    </ul>
  );
}

export default function UserFetchRetry({ initialError }) {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(initialError);

  const handleRetry = async () => {
    setIsLoading(true);
    setError(null); 

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data); 
    } catch (err) {
      setError('Failed to fetch data on retry. The API might be down.');
      console.error('Retry failed:', err);
    } finally {
      setIsLoading(false);
    }
  };
  
  if (users) {
    return (
      <div>
        <h1>Users List (Loaded on Client)</h1>
        <UserList users={users} />
      </div>
    );
  }

  return (
    <div>
      <h1>Error</h1>
      <p style={{ color: 'red' }}>{error}</p>
      
      <button onClick={handleRetry} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Retry'}
      </button>
    </div>
  );
}