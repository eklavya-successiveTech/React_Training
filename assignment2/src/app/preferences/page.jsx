"use client"
import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage'; 

function Preferences() {
  const [theme, setTheme] = useLocalStorage('app-theme', 'light');
  const [notifications, setNotifications] = useLocalStorage('notifications-enabled', true);
  const [username, setUsername] = useLocalStorage('username', 'Guest');

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleNotifications = () => {
    setNotifications(currentStatus => !currentStatus);
  };
  
  const componentStyle = {
    backgroundColor: theme === 'light' ? '#f8f9fa' : '#212529',
    color: theme === 'light' ? '#212529' : '#f8f9fa',
    border: '2px solid #0D6EFD',
    padding: '20px',
    borderRadius: '10px',
    fontFamily: 'sans-serif',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={componentStyle}>
      <h2>User Preferences</h2>
      <p style={{fontStyle: 'italic'}}>
        Change these settings, then <strong>refresh the page</strong>. Your choices will be remembered!
      </p>

      <div style={{ margin: '20px 0' }}>
        Current Theme: <strong>{theme}</strong>
        <button onClick={toggleTheme} style={{ marginLeft: '10px' }}>Toggle Theme</button>
      </div>

      <div style={{ margin: '20px 0' }}>
        Notifications: <strong>{notifications ? 'Enabled' : 'Disabled'}</strong>
        <button onClick={toggleNotifications} style={{ marginLeft: '10px' }}>Toggle Notifications</button>
      </div>

      <div style={{ margin: '20px 0' }}>
        Username: 
        <input 
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{ marginLeft: '10px' }}
        />
      </div>
    </div>
  );
}

export default Preferences;