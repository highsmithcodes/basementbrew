// components/Layout.js
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Footer from '../footer';
import { HomeIcon } from '@heroicons/react/20/solid';

export function Layout() {
  // const { route, signOut } = useAuthenticator((context) => [
  //   context.route,
  //   context.signOut,
  // ]);
  const navigate = useNavigate();

  function logOut() {
    // signOut();
    navigate('/login');
  }

  return (
    <>
      {/* {route !== 'authenticated' ? ( */}
        <>
      <nav className="bg-black py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
                <Link to="/">
                  <HomeIcon className="h-6 w-5 flex-none text-white mr-2" aria-hidden="true" />
                </Link>
            </div>
            <div className="flex space-x-4">
             
                <>
                  <Link to="/" className="text-white">
                    Home
                  </Link>
                  <Link to="/login" className="text-white">
                    Login
                  </Link>
                </>
      
            </div>
          </div>
        </div>
      </nav>
      
      </>
      <Outlet />
        <Footer/>
  
    </>
  );
}
export default Layout