'use client'
import { useState } from 'react';
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail, getAuth } from 'firebase/auth';
import { auth } from '../../../firebase/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const methods = await fetchSignInMethodsForEmail(getAuth(), email);
      if (methods.length > 0) {
        setError('This email is already registered.');
        return;
      }

      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log({ res });
      sessionStorage.setItem('user', true.toString());
      setEmail('');
      setPassword('');
      setSuccess(true);
      setError(null);
      setTimeout(() => {
        setSuccess(false);
      }, 3000); 
    } catch (e) {
      console.error(e);
      setError('This email is already registered.');
    }
  };

  const handleCancel = () => {
    setError(null); // Clears the error message when the icon is clicked
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-blue-700">Sign Up</h2>
        <form onSubmit={handleSignUp} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 bg-gray-200 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 bg-gray-200 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="********"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign Up
            </button>
          </div>
        </form>
        {success && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="p-6 bg-green-500 text-white rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out scale-100">
              Sign Up Successful!
            </div>
          </div>
        )}
        {error && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative p-6 bg-red-500 text-white rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out scale-100">
              {error}
              <FontAwesomeIcon
                icon={faTimes}
                onClick={handleCancel}
                className="absolute top-2 right-2 text-white cursor-pointer hover:text-gray-300"
              />
            </div>
          </div>
        )}
        <p className="text-sm text-center text-gray-600">
          Already have an account?{' '}
          <a href="/sign-in" className="text-blue-600 hover:text-blue-500">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
