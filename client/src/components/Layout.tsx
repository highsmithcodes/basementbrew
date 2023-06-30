// components/Layout.js
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuthenticator, Heading } from '@aws-amplify/ui-react';
import Footer from './Footer';
import { HomeIcon } from '@heroicons/react/20/solid';

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
                <Link to="/">
                  <HomeIcon className="h-6 w-5 flex-none text-white mr-2" aria-hidden="true" />
                </Link>
              </Heading>
            </div>
            <div className="flex space-x-4">
              {route !== 'authenticated' ? (
                <>
                  <Link to="/" className="text-white">
                    Home
                  </Link>
                  <Link to="/login" className="text-white">
                    Login
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/dashboard" className="text-white">
                    Dashboard
                  </Link>
                  <button
                    className="text-white"
                    onClick={() => {
                      logOut();
                    }}
                  >
                    Logout
                  </button>
                  <Link to="/profile" className="text-white">
                    <img
                      src="https://placehold.co/25x25"
                      style={{ margin: '0 auto', borderRadius: '50px' }}
                      alt="Profile"
                    />
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer/>
    </>
  );
}
export default Layout