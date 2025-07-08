"use client"
import React, { useState } from 'react';
import { useClipboard } from '../hooks/useClipboard'; // Adjust path if needed

function ClipboardDemo() {
  const [textToCopy, setTextToCopy] = useState('This text is ready to be copied!');
  const { copy, isCopied, error } = useClipboard();

  return (
    <div style={{ border: '2px solid #FD7E14', padding: '20px', borderRadius: '10px', fontFamily: 'sans-serif' }}>
      <h2>Custom `useClipboard` Hook Demo</h2>
      
      <p>Enter text below and click the button to copy it.</p>
      <textarea 
        value={textToCopy}
        onChange={(e) => setTextToCopy(e.target.value)}
        rows="4"
        style={{ width: '95%', padding: '5px' }}
      />
      <br />
      <button onClick={() => copy(textToCopy)} style={{ marginTop: '10px' }}>
        {isCopied ? 'Copied to Clipboard!' : 'Copy Text'}
      </button>

      {error && <p style={{ color: 'red', marginTop: '10px' }}>Error: {error}</p>}

      <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
        Now try pasting (Ctrl+V or Cmd+V) somewhere else!
      </p>
    </div>
  );
}

export default ClipboardDemo;