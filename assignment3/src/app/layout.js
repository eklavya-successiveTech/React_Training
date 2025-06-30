'use client'; // This is required because our providers use React hooks

import { AuthProvider } from './context/authContext';
import { ThemeProvider } from './context/themeContext';
import Navbar from './components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ThemeProvider>
            <Navbar />
            <main>{children}</main>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}