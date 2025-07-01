import axios from 'axios';
import UserFetchRetry from '../components/UserFetchRetry';


function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h2>{user.name}</h2>
          <p>Email: <a href={`mailto:${user.email}`}>{user.email}</a></p>
        </li>
      ))}
    </ul>
  );
}

export default async function UsersPage() {
  
  async function fetchUsers() {
    try {
      
      const API_URL = 'https://jsonplaceholder.typicode.com/users';
      
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Server-side fetch failed:', error.message);
      return null; 
    }
  }

  const users = await fetchUsers();

  if (!users) {
    return (
      <UserFetchRetry initialError="Failed to load data on the server. Please try again." />
    );
  }

  return (
    <div>
      <h1>Users List (Loaded on Server)</h1>
      <UserList users={users} />
    </div>
  );
}