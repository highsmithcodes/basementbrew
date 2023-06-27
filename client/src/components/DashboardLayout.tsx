// components/Protected.js
import { useAuthenticator, Heading } from '@aws-amplify/ui-react';
import { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { DynamoDB } from 'aws-sdk';
import { MapPinIcon, EnvelopeIcon, LinkIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import UserDetails from './UserDetails';

export function DashboardLayout() {

  const { route } = useAuthenticator((context) => [context.route]);
  
  const message =
    route === 'authenticated' ? 'FIRST PROTECTED ROUTE!' : 'Loading...';
  return (
    <div className="container mx-auto my-28">
      <div className="grid-container grid grid-cols-5">
        <div className="item1 col-span-1 flex flex-col justify-center items-center">
            <UserDetails />
        </div>
        <div className="item2 col-span-4">      
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
      </div>
    </div>
  );
}
export default DashboardLayout;