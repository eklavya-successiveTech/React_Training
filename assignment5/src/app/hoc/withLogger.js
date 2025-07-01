'use client'; 
import { useEffect, useRef } from 'react';

const withLogger = (WrappedComponent) => {
  const LoggerComponent = (props) => {
    const isMounted = useRef(false);

    useEffect(() => {
      const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
      console.log(`[Logger HOC]: Component '${componentName}' has mounted.`);

      return () => {
        console.log(`[Logger HOC]: Component '${componentName}' is unmounting.`);
      };
    }, []); 

    useEffect(() => {
      if (isMounted.current) {
        const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
        console.log(`[Logger HOC]: Component '${componentName}' has updated.`);
      } else {
        isMounted.current = true;
      }
    }); 
    return <WrappedComponent {...props} />;
  };
  
  LoggerComponent.displayName = `withLogger(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return LoggerComponent;
};

export default withLogger;