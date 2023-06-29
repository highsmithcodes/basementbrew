// components/Protected.js
import { useAuthenticator, Heading } from '@aws-amplify/ui-react';
import { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { DynamoDB } from 'aws-sdk';
import { MapPinIcon, EnvelopeIcon, LinkIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import UserDetails from '../components/UserDetails';
import CreateBrewForm from '../components/CreateBrew';

export function CreateBrew() {

  const { route } = useAuthenticator((context) => [context.route]);
  
  const message =
    route === 'authenticated' ? 'Second PROTECTED ROUTE!' : 'Loading...';
  return (
    <div className="container mx-auto my-16 p-4">
      <div className="flex flex flex-col md:flex-row lg:flex-row xl:flex-row">
        <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 pt-0 flex-col justify-center items-center py-5 md:pr-5 lg:pr-5 xl:pr-5">
            <UserDetails />
        </div>
        <div className="item2 w-full w-3/4 md:w-3/4 lg:w-3/4 lx:w-3/4">      
          <div className='py-0'>
            <CreateBrewForm/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateBrew;