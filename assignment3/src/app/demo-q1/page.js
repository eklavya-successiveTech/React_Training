import { AuthProvider } from '../context/authContext';
import AuthDisplay from '../components/AuthDisplay';

export default function DemoQ1Page() {
  return (
    <AuthProvider>
      <AuthDisplay />
    </AuthProvider>
  );
}