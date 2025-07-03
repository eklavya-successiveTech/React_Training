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

 
return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-700">
        This is the about page, served from{" "}
        <code>src/app/about/page.tsx</code>.
      </p>
      <p className="mt-4 text-lg text-gray-700">
        Next.js automatically creates this route because we created a folder
        named <strong>about</strong> with a <strong>page.tsx</strong> file
        inside it.
      </p>
    </div>
  );
}