'use client'; 
import { useState } from 'react';
import withLogger from '../hoc/withLogger';

function MyComponent({ counter }) {
  return (
    <div style={{ border: '1px solid black', padding: '10px', marginTop: '10px' }}>
      <h2>This is the Logged Component</h2>
      <p>It has a prop `counter` with the value: {counter}</p>
    </div>
  );
}

const LoggedComponent = withLogger(MyComponent);

export default function LoggerDemoPage() {
  const [isVisible, setIsVisible] = useState(true);
  const [counter, setCounter] = useState(0);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <h1>HOC Logger Demo</h1>
      <p>Open your browser's developer console to see the logs.</p>
      
      <button onClick={toggleVisibility}>
        {isVisible ? 'Unmount Component' : 'Mount Component'}
      </button>

      <button onClick={incrementCounter}>
        Update Component (increment counter)
      </button>

      {isVisible && <LoggedComponent counter={counter} />}
    </div>
  );
}