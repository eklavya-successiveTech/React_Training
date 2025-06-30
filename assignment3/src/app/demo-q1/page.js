import { AuthProvider } from '../context/authContext';
import AuthDisplay from '../components/AuthDisplay';

export default function DemoQ1Page() {
  return (
    <AuthProvider>
      <h1>Question 1: Basic Context Provider</h1>
      <p>This component acts as a local provider for the component below.</p>
      <hr />
      <AuthDisplay />
    </AuthProvider>
  );
}