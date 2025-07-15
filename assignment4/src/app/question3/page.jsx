'use client';

import { useState, useEffect } from 'react';

const MessageComponent = () => {
  return (
    <div>
      <p>The secret component is now visible.</p>
    </div>
  );
};

export default function ConditionalRenderPage() {
  const [inputValue, setInputValue] = useState('');
  const [shouldShowComponent, setShouldShowComponent] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (inputValue === 'show') {
      setShouldShowComponent(true);
    } else {
      setShouldShowComponent(false);
    }
  }, [inputValue]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type 'show'"
      />
      
      {shouldShowComponent && <MessageComponent />}
    </div>
  );
}
