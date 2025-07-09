import axios from 'axios';

export default async function UsersPage() {
  
  async function fetchUsers() {
    const API_URL = 'https://jsonplaceholder.typicode.com/users';
    
    try {
      const response = await axios.get(API_URL);
      return response.data; 
    } catch (error) {
      console.error('Failed to fetch users:', error.message);
      return null;
    }
  }

  const users = await fetchUsers();

  return (
    <div>
      {!users ? (
        <div>
          <h1>Error</h1>
          <p>Could not fetch user data. Please try again later.</p>
        </div>
      ) : (
        <div>
          <h1>Users List</h1>
          <ul>
            {users.map((user) => (
              <li key={user.id} >
                <h2>{user.name}</h2>
                <p>Username: {user.username}</p>
                <p>
                  Email: <a href={`mailto:${user.email}`}>{user.email}</a>
                </p>
                <p>Phone: {user.phone}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}