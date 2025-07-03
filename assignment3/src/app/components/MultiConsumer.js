'use client';

import { useAuth } from '../context/authContext';
import { useTheme } from '../context/themeContext';

export default function MultiConsumer() {
  const { user, login } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const style = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#333' : '#fff',
    padding: '20px',
  };

  return (
    <div style={style}>
      {user ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <div>
          <p>Please log in.</p>
          <button onClick={() => login('testuser')}>Login</button>
        </div>
      )}

      <hr />
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}