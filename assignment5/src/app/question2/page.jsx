import ErrorBoundary from './ErrorBoundary';

async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Failed to fetch users');
    return await response.json();
  } catch (error) {
    throw new Error('Failed to load users');
  }
}

export default async function UsersPage() {
  try {
    const users = await getUsers();
    return (
      <div>
        <h1>Users</h1>
        {users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
      </div>
    );
  } catch (error) {
    return <ErrorBoundary />;
  }
}