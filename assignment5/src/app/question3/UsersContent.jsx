export default function UsersContent({ users }) {
  return (
    <div>
      {users.map(user => (
        <div key={user.id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd' }}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}