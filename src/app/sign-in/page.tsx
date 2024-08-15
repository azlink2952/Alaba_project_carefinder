'use client'
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/config';
import { useRouter } from 'next/navigation';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Reset error state
    try {
      const res = await signInWithEmailAndPassword(email, password);
      if (!res) throw new Error('User not found');
      
      sessionStorage.setItem('user', true.toString());
      setEmail('');
      setPassword('');
      setShowSuccess(true);

      setTimeout(() => {
        router.push('/');
      }, 2000); 
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message); // Display the error message
      } else {
        setError('An unexpected error occurred'); // Fallback for non-Error objects
      }
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2 focus:ring focus:ring-blue-200 focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2 focus:ring focus:ring-blue-200 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Sign In
          </button>
        </form>
        {error && (
          <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        {showSuccess && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded transition-opacity duration-500 ease-in-out opacity-100">
            Sign in success!
          </div>
        )}
        <div className="mt-4 text-center">
          <p className="text-gray-600">Do not have an account? &nbsp;
          <a href="/sign-up" className="text-blue-600 hover:text-blue-500">
            Sign up here
          </a></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
