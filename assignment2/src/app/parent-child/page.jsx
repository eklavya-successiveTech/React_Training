"use client"
import React, { useState, useCallback } from 'react';
import Child from '../components/Question13/Child';

function Parent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);


  const handleIncrement = useCallback(() => {
    setCount(c => c + 1); 
  }, []); 
  const handleReset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div >
      <h2>I am the Parent Component</h2>
      <p>Parent's Count: {count}</p>
      <p>Other Parent State: {otherState}</p>
      
      <button onClick={() => setOtherState(s => s + 1)}>
        Force Parent to Re-render
      </button>

      <p style={{ marginTop: '20px' }}>
        <em>Open your browser's console to see the render logs.</em>
      </p>

      <Child 
        count={count} 
        onIncrement={handleIncrement} 
        onReset={handleReset}
      />
    </div>
  );
}

export default Parent;