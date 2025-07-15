import withAuth from "../hoc/withAuth";

function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is a protected page. You can only see this if you are authenticated.</p>
    </div>
  );
}

export default withAuth(DashboardPage);