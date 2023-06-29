// components/Protected.js
import { useAuthenticator, Heading } from '@aws-amplify/ui-react';
import { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { DynamoDB } from 'aws-sdk';
import { MapPinIcon, EnvelopeIcon, LinkIcon, PencilIcon } from '@heroicons/react/20/solid';
import { Link, useLocation } from 'react-router-dom';

export function UserDetails() {
  const [userProfile, setUserProfile] = useState<any>(null); // Specify the type as `any` for now
  const location = useLocation();

  const { route } = useAuthenticator((context) => [context.route]);
  const fetchUserProfile = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      const userId = currentUser.username;
  
      const dynamoDB = new DynamoDB.DocumentClient({
        region: 'us-east-1',
        accessKeyId: 'AKIA2CNAK7BASZTYEZMA',
        secretAccessKey: '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',
      });
  
      const queryParams = {
        TableName: 'basementbrew_users',
        Key: { UserInfo: userId },
      };
  
      const result = await dynamoDB.get(queryParams).promise();
  
      if (result.Item) {
        setUserProfile(result.Item);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };
  useEffect(() => {
    fetchUserProfile();
  }, []);
  const message =
    route === 'authenticated' ? 'FIRST PROTECTED ROUTE!' : 'Loading...';
  return (
    <div className='drop-shadow-md bg-white rounded-3xl p-5'>
          {userProfile && (
            <div className='flex flex-col justify-start items-center'>
              <div className='flex flex-col justify-start items-start text-center'>
                <div className='text-center'>
                  <img src="https://placehold.co/100x100" style={{margin: '0 auto 20px auto', borderRadius: '50px'}} />
                  <div className='text-xl'>{userProfile.username}</div>
                  <div className='text-sm'>{userProfile.description}</div>
                </div>
              </div>
              <ul className='pt-2 pl-0 flex flex-col justify-start items-start'>
                <li className='flex flex-row justify-start items-start'>
                  <MapPinIcon className="h-6 w-5 flex-none text-black mr-2" aria-hidden="true"  />
                  <div>{userProfile.location}</div>
                </li>
                <li className='flex flex-row justify-start items-start'>
                  <EnvelopeIcon className="h-6 w-5 flex-none text-black mr-2" aria-hidden="true"  />
                  <div>email@email.com</div>
                </li>
              </ul>
            </div>
          )}

      <nav aria-label="Tabs" className='w-full mt-5 pt-5'>
        <ul className="flex flex-col w-full">
          <li className={`flex-1 text-left rounded-3xl ${location.pathname === '/brews' ? 'bg-black text-white' : 'text-black'} hover:bg-black hover:text-white duration-100 mb-2`}>
            <div className="flex items-center justify-start gap-4">
              <Link className="text-sm font-medium p-4" to="/brews">Your Brews</Link>
            </div>
          </li>

          <li className={`flex-1 text-left rounded-3xl ${location.pathname === '/all-brews' ? 'bg-black text-white' : 'text-black'} hover:bg-black hover:text-white duration-100 mb-2`}>
            <div className="flex items-center justify-start gap-4">
              <Link className="text-sm font-medium p-4" to="/all-brews">All Brews</Link>
            </div>
          </li>
          <li className={`flex-1 text-left rounded-3xl ${location.pathname === '/create-brew' ? 'bg-black text-white' : 'text-black'} hover:bg-black hover:text-white duration-100 mb-2`}>
            <div className="flex items-center justify-start gap-4">
              <Link className="text-sm font-medium p-4" to="/create-brew">Create Brew</Link>
            </div>
          </li>
        </ul>
      </nav>
   </div>
  );
}
export default UserDetails;