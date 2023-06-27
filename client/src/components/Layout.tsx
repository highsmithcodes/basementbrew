// components/Layout.js
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthenticator, Button, Heading, View } from '@aws-amplify/ui-react';
import Footer from './Footer';

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
      <nav className="bg-black py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <Heading level={1} className="text-white text-xl">
                Basement Brew
              </Heading>
            </div>
            <div className="flex space-x-4">              
              {route !== 'authenticated' ? (
                <>
                <a className="text-white" onClick={() => navigate('/')}>Home</a>
                <a className="text-white" onClick={() => navigate('/login')}>Login</a>
                </>
              ) : (
                <>
                <a className="text-white" onClick={() => navigate('/dashboard')}>
                Dashboard
                </a>
                <a className="text-white" onClick={() => logOut()}>Logout</a>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* <View className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {route === 'authenticated' ? (
          <p className="text-green-500">You are logged in!</p>
        ) : (
          <p className="text-red-500">Please Login!</p>
        )}
      </View> */}
      <Outlet />
      <Footer/>
    </>
  );
}
export default Layout