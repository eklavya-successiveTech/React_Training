'use client';

import { useRouter } from 'next/navigation';

export default function ErrorBoundary() {
  const router = useRouter();

  const handleRetry = () => {
    router.refresh();
  };

  return (
    <div>
      <p>Something went wrong. Please try again.</p>
      <button onClick={handleRetry}>Retry</button>
    </div>
  );
}