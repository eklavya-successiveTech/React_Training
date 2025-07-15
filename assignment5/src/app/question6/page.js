'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} >
          <h2>{user.name}</h2>
          <p>Email: <a href={`mailto:${user.email}`}>{user.email}</a></p>
        </li>
      ))}
    </ul>
  );
}

export default function UsersPage() {
  const [users, setUsers] = useState(null);

  async function fetchUsers() {
    try {
      const API_URL = 'https://jsonplaceholder.typicode.com/users';
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error('Fetch failed:', error.message);
      setUsers(null);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      {!users ? (
        <button onClick={fetchUsers}>
          Retry Fetch Users
        </button>
      ) : (
        <UserList users={users} />
      )}
    </div>
  );
}