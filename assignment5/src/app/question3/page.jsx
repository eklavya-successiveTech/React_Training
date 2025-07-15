import { Suspense } from 'react';
import UsersContent from './UsersContent';
import LoadingSpinner from './LoadingSpinner';

async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) throw new Error('Failed to fetch users');
  return await response.json();
}

export default async function UsersPage() {
  try {
    const users = await getUsers();
    return (
      <div>
        <h1>Users</h1>
        <Suspense fallback={<LoadingSpinner />}>
          <UsersContent users={users} />
        </Suspense>
      </div>
    );
  } catch (error) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <p style={{ color: 'red' }}>Something went wrong. Please try again.</p>
        <RetryButton />
      </div>
    );
  }
}