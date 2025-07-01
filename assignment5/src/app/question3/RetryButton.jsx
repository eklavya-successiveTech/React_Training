'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function RetryButton() {
  const router = useRouter();
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = async () => {
    setIsRetrying(true);
    router.refresh();
    setTimeout(() => setIsRetrying(false), 1000);
  };

  return (
    <button 
      onClick={handleRetry}
      disabled={isRetrying}
      style={{
        padding: '10px 20px',
        backgroundColor: isRetrying ? '#ccc' : '#3498db',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: isRetrying ? 'not-allowed' : 'pointer'
      }}
    >
      {isRetrying ? 'Retrying...' : 'Retry'}
    </button>
  );
}