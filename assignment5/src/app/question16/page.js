import withDataFetching from '../hoc/withDataFetching';
import UserList from '../components/UserList';

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) {
    throw new Error('Failed to fetch users from API.');
  }
  return res.json();
};


const UserListWithData = withDataFetching(UserList, fetchUsers);

export default function SsrHocDemoPage() {
  return (
    <div>
      <h1>SSR Data Fetching HOC Demo</h1>
      <p>
        The user list below is fetched on the server (SSR) and then passed as props 
        to a Client Component for rendering.
      </p>
      
      <UserListWithData />
    </div>
  );
}