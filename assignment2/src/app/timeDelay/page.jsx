"use client"
import React from 'react';
import { useTimer } from '../hooks/useTimer'; 

function TimerDisplay() {
  const { seconds, isActive, start, pause, reset } = useTimer(60);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const remainingSeconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${remainingSeconds}`;
  };

  return (
    <div style={{ border: '2px solid #DC3545', padding: '20px', borderRadius: '10px', fontFamily: 'monospace', textAlign: 'center' }}>
      <h2>Custom `useTimer` Hook</h2>
      
      <div style={{ fontSize: '4rem', margin: '20px' }}>
        {formatTime(seconds)}
      </div>

      <div style={{ marginBottom: '10px' }}>
        Status: {seconds === 0 ? 'Finished!' : isActive ? 'Running...' : 'Paused/Ready'}
      </div>

      <div>
        <button onClick={start} disabled={isActive || seconds === 0}>
          Start
        </button>
        <button onClick={pause} disabled={!isActive} style={{ margin: '0 10px' }}>
          Pause
        </button>
        <button onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default TimerDisplay;