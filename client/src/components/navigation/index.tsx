import { Link } from 'react-router-dom';
import { useAuthenticator, Heading } from '@aws-amplify/ui-react';


const Navigation = () => {
    const { route } = useAuthenticator((context) => [context.route]);
  
    const message =
      route === 'authenticated' ? 'FIRST PROTECTED ROUTE!' : 'Loading...';

    return (
        <div className="item2 w-full w-3/4 md:w-3/4 lg:w-3/4 lx:w-3/4">      
          <nav aria-label="Tabs">
            <ul className="flex border-b border-gray-100">
              <li className="flex-1">
                <a className="relative block p-4" href="">
                  <span
                    className="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"
                  ></span>

                  <div className="flex items-center justify-center gap-4">
                    <Link className="text-sm font-medium text-gray-900" to="/brews">Your Brews</Link>
                  </div>
                </a>
              </li>

              <li className="flex-1">
                <a className="relative block p-4" href="">
                  <div className="flex items-center justify-center gap-4">
                    <Link className="text-sm font-medium text-gray-900" to="/likes">Likes</Link>
                  </div>
                </a>
              </li>

              <li className="flex-1">
                <a className="relative block p-4" href="">
                  <div className="flex items-center justify-center gap-4">
                    <Link className="text-sm font-medium text-gray-900" to="/favorites">Favorites</Link>
                  </div>
                </a>
              </li>

              <li className="flex-1">
                <a className="relative block p-4" href="">
                  <div className="flex items-center justify-center gap-4">
                    <Link className="text-sm font-medium text-gray-900" to="/create-post">Create Post</Link>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
          <div className='py-5'>
            <Heading level={1}>{message}</Heading> 
          </div>
        </div>
    )
}
export default Navigation