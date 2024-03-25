import { useState } from 'react';
import AWS from 'aws-sdk';
import { useNavigate } from 'react-router-dom';
import UserDetails from '../components/userdetails';


export const UserProfile = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');


  return (
    <div className="">
      <div className="flex flex flex-col md:flex-row lg:flex-row xl:flex-row">
        <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 pt-0 flex-col justify-center items-center md:pr-5 lg:pr-5 xl:pr-5">
          <UserDetails />
        </div>
        <div className="item2 w-full w-3/4 md:w-3/4 lg:w-3/4 lx:w-3/4 px-8 py-20">
          <div className="p-10 bg-white rounded-3xl drop-shadow-md">
            <div>
              <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
              <div className="mb-4">
                <label className="block font-bold mb-1">Username</label>
                <input
                  className="border border-gray-300 rounded py-2 px-4 w-full"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-1">Description</label>
                <textarea
                  className="border border-gray-300 rounded py-2 px-4 w-full"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-1">Location</label>
                <input
                  className="border border-gray-300 rounded py-2 px-4 w-full"
                  type="text"
                  value={location}
                />
              </div>
              <button
                className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
