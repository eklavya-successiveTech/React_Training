// This file demonstrates the answer to Question 2.

import { AuthProvider } from '../context/authContext';
import { ThemeProvider } from '../context/themeContext';
import MultiConsumer from '../components/MultiConsumer';

export default function DemoQ2Page() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <h1>Question 2: Nested Contexts</h1>
        <p>This component provides both Auth and Theme contexts.</p>
        <hr />
        <MultiConsumer />
      </ThemeProvider>
    </AuthProvider>
  );
}