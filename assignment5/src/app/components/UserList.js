'use client'; 
import { useState } from 'react';

export default function UserList({ data: users }) {
  const [selectedUser, setSelectedUser] = useState(null);

  if (!users || users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <div>
      <p>Click on a user to highlight them (Client-side interactivity).</p>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => setSelectedUser(user)}
            style={{ 
              cursor: 'pointer',
              padding: '5px',
              backgroundColor: selectedUser?.id === user.id ? 'lightblue' : 'transparent' 
            }}
          >
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
      {selectedUser && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>Selected User:</h3>
          <p><strong>ID:</strong> {selectedUser.id}</p>
          <p><strong>Name:</strong> {selectedUser.name}</p>
          <p><strong>Username:</strong> {selectedUser.username}</p>
        </div>
      )}
    </div>
  );
}