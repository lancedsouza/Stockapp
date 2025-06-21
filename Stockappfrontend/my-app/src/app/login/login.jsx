'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ username: email, password }),
      });

      if (!res.ok) throw new Error('Invalid credentials');

      const data = await res.json();
      localStorage.setItem('access_token', data.access_token);

      router.push('/dashboard'); // redirect after login
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20 p-6 border rounded">
      <h1 className="text-2xl mb-6">Login</h1>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        className="border p-2 mb-4 w-full"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        className="border p-2 mb-4 w-full"
      />
      <button type="submit" className="bg-indigo-600 text-white p-2 rounded w-full">Login</button>
    </form>
  );
}
