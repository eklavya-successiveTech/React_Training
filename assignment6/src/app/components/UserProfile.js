export default function UserProfile({ name, email, phone }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  )
}