import { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/20/solid';
import { dynamoDB } from '../../configs/dynamoDBConfig';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

const SkeletonLoading = () => (
  <div className="shadow rounded-md p-4 max-w-sm w-full mx-auto min-h-80">
    <div className="animate-pulse flex flex-col justify-center items-center">
      <div className="rounded-full bg-slate-700 h-24 w-24"></div>
      <div className="flex-1 space-y-2.5 py-1 w-48 mt-6">
        <div className="h-3 bg-slate-700 rounded"></div>
        <div className="h-2 bg-slate-700 rounded w-1/2 m-auto"></div>
        <div className='flex flex-row'>
          <div className="h-2 bg-slate-700 rounded w-2/12 mr-3"></div>
          <div className="h-2 bg-slate-700 rounded w-9/12"></div>
        </div>
        <div className='flex flex-row'>
          <div className="h-2 bg-slate-700 rounded w-2/12 mr-3"></div>
          <div className="h-2 bg-slate-700 rounded w-9/12"></div>
        </div>
      </div>
    </div>
  </div>
);

export function UserDetails() {
  const [userProfile, setUserProfile] = useState<any>(null); // Specify the type as `any` for now
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  const fetchUserProfile = async () => {
    setLoading(true);
  
    setTimeout(async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        const userId = currentUser.username;
    
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
      } finally {
        setLoading(false);
      }
    }, 500);
  };
  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);
  const navigate = useNavigate();
  function logOut() {
    signOut();
    navigate('/login');
  }
  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <>
      {loading ? (
        <SkeletonLoading />
      ) : (
        userProfile && (
          <>
          <div className='flex flex-col justify-start items-center p-5 bg-light-yellow'>
            <div className='flex justify-start items-start text-center w-full'>
              <div className='text-center flex flex-row w-full justify-items-start'>
                <img src="https://placehold.co/70x70" alt="head" className='rounded-lg' />
                <div className='pl-3 text-left'>
                  <div className='text-sm font-light text-dark-yellow'>Hey,</div>
                  <div className='text-sm font-bold text-dark-yellow'>Test Username</div>
                </div>
                {/* <div className='text-sm text-dark-yellow'>{userProfile.description}</div> */}
              </div>
            </div>
            {/* <ul className='pt-2 pl-0 flex flex-col justify-start items-start'>
              <li className='flex flex-row justify-start items-start'>
                <MapPinIcon className="h-6 w-5 flex-none text-dark-yellow mr-2" aria-hidden="true"  />
                <div className='text-dark-yellow'>{userProfile.location}</div>
              </li>
              <li className='flex flex-row justify-start items-start'>
                <EnvelopeIcon className="h-6 w-5 flex-none text-dark-yellow mr-2" aria-hidden="true"  />
                <div className='text-dark-yellow'>{userProfile.email}</div>
              </li>
            </ul> */}
          </div>
          </>
        )
      )}
   </>
  );
}
export default UserDetails;