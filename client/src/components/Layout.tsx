// components/Layout.js
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthenticator, Button, Heading, View } from '@aws-amplify/ui-react';

export function Layout() {
  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);
  const navigate = useNavigate();

  function logOut() {
    signOut();
    navigate('/login');
  }
  return (
    <>
      <nav className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <Button onClick={() => navigate('/')}>Home</Button>
              <Button onClick={() => navigate('/protected')}>
                First Protected Route
              </Button>
              <Button onClick={() => navigate('/protected2')}>
                Second Protected Route
              </Button>
              {route !== 'authenticated' ? (
                <Button onClick={() => navigate('/login')}>Login</Button>
              ) : (
                <Button onClick={() => logOut()}>Logout</Button>
              )}
            </div>
            <div>
              <Heading level={1} className="text-white text-xl">
                Example Auth Routes App
              </Heading>
            </div>
          </div>
        </div>
      </nav>

      <View className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {route === 'authenticated' ? (
          <p className="text-green-500">You are logged in!</p>
        ) : (
          <p className="text-red-500">Please Login!</p>
        )}
      </View>

      <Outlet />
    </>
  );
}
export default Layout