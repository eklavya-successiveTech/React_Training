"use client"
import { useState, useEffect, useRef } from 'react';

export function useTimer(initialSeconds = 60) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
      
        setSeconds(prevSeconds => {
          if (prevSeconds <= 1) {
            clearInterval(intervalRef.current);
            setIsActive(false); 
            return 0; 
          }
          return prevSeconds - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive]); 

  const start = () => {
    if (!isActive && seconds > 0) {
      setIsActive(true);
    }
  };

  const pause = () => {
    setIsActive(false);
  };

  const reset = () => {
    setIsActive(false);
    setSeconds(initialSeconds);
  };

  return { seconds, isActive, start, pause, reset };
}