// components/Protected.js
import { useAuthenticator, Heading } from '@aws-amplify/ui-react';
import { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { DynamoDB } from 'aws-sdk';
import { MapPinIcon, EnvelopeIcon, LinkIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

export function Dashboard() {
  const [userProfile, setUserProfile] = useState<any>(null); // Specify the type as `any` for now

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
    <div className="container mx-auto my-28">
      <div className="grid-container grid grid-cols-5">
        <div className="item1 col-span-1 flex flex-col justify-center items-center">
          {userProfile && (
            <div className='flex flex-col justify-start items-start'>
              <div className='flex flex-col justify-start items-start'>
                <div className='text-xl'>{userProfile.username}</div>
                <div className='text-xl'>Self Taught Home Brewer</div>
                <button className="rounded-full my-5 bg-black text-white px-6 "><Link to="/profile">Edit Profile</Link></button>
              </div>
              <ul className='pt-5 pl-0 flex flex-col justify-start items-start'>
                <li className='flex flex-row justify-start items-start'>
                  <MapPinIcon className="h-6 w-5 flex-none text-black" aria-hidden="true"  />
                  <div>Denver, CO</div>
                </li>
                <li className='flex flex-row justify-start items-start'>
                  <EnvelopeIcon className="h-6 w-5 flex-none text-black" aria-hidden="true"  />
                  <div>email@email.com</div>
                </li>
              </ul>
            </div>
          )}</div>
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
export default Dashboard;