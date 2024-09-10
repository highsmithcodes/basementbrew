import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {    

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
        <nav aria-label="Tabs" className='w-full mt-5 pt-5'>
          <ul className="flex flex-col w-full justify-start text-left">
            <li className="text-left rounded-3xl text-white hover:bg-black hover:text-white duration-100 mb-2 p-4">
              <Link className="text-sm font-medium" to="/brews">Your Brews</Link>
            </li>

            <li className="text-left rounded-3xl text-white hover:bg-black hover:text-white duration-100 mb-2 p-4">
              <Link className="text-sm font-medium" to="/all-brews">All Brews</Link>
            </li> 

            <li className="text-left rounded-3xl text-white hover:bg-black hover:text-white duration-100 mb-2 p-4">
              <Link className="text-sm font-medium" to="/liked-brews">Likes</Link>
            </li>

            <li className="text-left rounded-3xl text-white hover:bg-black hover:text-white duration-100 mb-2 p-4">
              <Link className="text-sm font-medium" to="/create-brew">Create Brew</Link>
            </li>

            <li className="text-left rounded-3xl text-white hover:bg-black hover:text-white duration-100 mb-2 p-4">
                <button
                  className="text-white text-left rounded-3xl mb-6"
                  onClick={() => {
                    logOut();
                  }}
                >
                  Logout
                </button>
            </li>

          </ul>
        </nav>
      </>
    )
}
export default Navigation