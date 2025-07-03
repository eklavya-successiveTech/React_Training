// This file demonstrates the answer to Question 2.

import { AuthProvider } from '../context/authContext';
import { ThemeProvider } from '../context/themeContext';
import MultiConsumer from '../components/MultiConsumer';

export default function DemoQ2Page() {
  return (
    <AuthProvider>
      <ThemeProvider>
        
        <MultiConsumer />
      </ThemeProvider>
    </AuthProvider>
  );
}