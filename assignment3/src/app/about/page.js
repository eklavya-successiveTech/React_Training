'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/authContext';

export default function AboutPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) {
    return <p>Loading or redirecting...</p>;
  }

  return (
    <div>
      <h1>About Page (Protected)</h1>
      <p>You can only see this page if you are logged in.</p>
    </div>
  );
}