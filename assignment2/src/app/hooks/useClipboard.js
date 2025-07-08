import { useState, useCallback } from 'react';

export function useClipboard() {

  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState(null);
  const copy = useCallback(async (text) => {

    if (!navigator?.clipboard) {
      const errorMessage = 'Clipboard API not available in this browser.';
      console.error(errorMessage);
      setError(errorMessage);
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setError(null); 
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);

    } catch (err) {
      console.error('Failed to copy text: ', err);
      setError('Failed to copy text. See console for details.');
      setIsCopied(false);
    }
  }, []); 
  return { copy, isCopied, error };
}