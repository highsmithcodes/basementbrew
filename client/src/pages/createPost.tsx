// components/Protected.js
import { useAuthenticator, Heading } from '@aws-amplify/ui-react';
import { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { DynamoDB } from 'aws-sdk';
import { MapPinIcon, EnvelopeIcon, LinkIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import UserDetails from '../components/UserDetails';
import CreatePostForm from '../components/createPost';

export function CreatePost() {

  const { route } = useAuthenticator((context) => [context.route]);
  
  const message =
    route === 'authenticated' ? 'Second PROTECTED ROUTE!' : 'Loading...';
  return (
    <div className="container mx-auto my-28">
      <div className="grid-container grid grid-cols-5">
        <div className="item1 col-span-1 flex flex-col justify-center items-center">
            <UserDetails />
        </div>
        <div className="item2 col-span-4">      
          <nav aria-label="Tabs">
            <ul className="flex border-b border-gray-100">
              <li className="flex-1 bg-gray-400 hover:bg-black duration-100">
                  <div className="flex items-center justify-center gap-4">
                    <Link className="text-sm font-medium text-white p-4" to="/brews">Your Brews</Link>
                  </div>
              </li>

              <li className="flex-1 bg-gray-400 hover:bg-black duration-100">
                  <div className="flex items-center justify-center gap-4">
                    <Link className="text-sm font-medium text-white p-4" to="/all-posts">All Brews</Link>
                  </div>
              </li>

              <li className="flex-1 bg-gray-400 hover:bg-black duration-100">
                  <div className="flex items-center justify-center gap-4">
                    <Link className="text-sm font-medium text-white p-4" to="/favorites">Likes</Link>
                  </div>
              </li>

              <li className="flex-1 bg-black">
                  <div className="flex items-center justify-center gap-4">
                    <Link className="text-sm font-medium text-white p-4" to="/create-post">Create Post</Link>
                  </div>
              </li>
            </ul>
          </nav>
          <div className='py-5'>
            <CreatePostForm/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreatePost;