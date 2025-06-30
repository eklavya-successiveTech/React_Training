'use client';

import { useAuth } from '../context/authContext';

export default function AuthDisplay() {
  const { user, login } = useAuth();

  return (
    <div>
      {user ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <div>
          <p>Please log in.</p>
          <button onClick={() => login('testuser')}>Login</button>
        </div>
      )}
    </div>
  );
}