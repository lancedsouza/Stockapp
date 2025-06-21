// src/app/layout.js
import './globals.css';

export const metadata = {
  title: 'Stock App',
  description: 'Angel One clone',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
