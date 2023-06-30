import { useState } from 'react';
import { Auth } from 'aws-amplify';
import AWS, { DynamoDB } from 'aws-sdk';
import { useNavigate } from 'react-router-dom';
import UserDetails from '../components/UserDetails';


export function UserProfile() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const handleSaveChanges = async () => {
    try {
      // Get the current authenticated user
      const currentUser = await Auth.currentAuthenticatedUser();
  
      // Extract the user ID from the current authenticated user
      const userId = currentUser.username;
  
      // Initialize the AWS SDK with the credentials
      AWS.config.update({
        region: 'us-east-1',
        accessKeyId: 'AKIA2CNAK7BASZTYEZMA',
        secretAccessKey: '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', 
      });
  
      // Create an instance of the DynamoDB DocumentClient
      const dynamoDB = new AWS.DynamoDB.DocumentClient();
  
      // Update the user profile in DynamoDB
      const updateExpressionParts: string[] = [];
      const expressionAttributeValues: { [key: string]: any } = {};
      const expressionAttributeNames: { [key: string]: string } = {};
  
      if (username) {
        updateExpressionParts.push('#username = :username');
        expressionAttributeValues[':username'] = username;
        expressionAttributeNames['#username'] = 'username';
      }
  
      if (description) {
        updateExpressionParts.push('#description = :description');
        expressionAttributeValues[':description'] = description;
        expressionAttributeNames['#description'] = 'description';
      }
  
      if (location) {
        updateExpressionParts.push('#location = :location');
        expressionAttributeValues[':location'] = location;
        expressionAttributeNames['#location'] = 'location';
      }
  
      const updateExpression = `SET ${updateExpressionParts.join(', ')}`;
  
      const updateParams = {
        TableName: 'basementbrew_users',
        Key: { UserInfo: userId },
        UpdateExpression: updateExpression,
        ExpressionAttributeNames: expressionAttributeNames,
        ExpressionAttributeValues: expressionAttributeValues,
      };
  
      await dynamoDB.update(updateParams).promise();
      console.log('User profile updated in DynamoDB');
  
      console.log('User profile updated successfully');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  const handleLocationInputChange = (e:any) => {
    const enteredLocation = e.target.value;
    setLocation(enteredLocation);
  };

  return (
    <div className="container mx-auto my-16 p-4">
      <div className="flex flex flex-col md:flex-row lg:flex-row xl:flex-row">
        <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 pt-0 flex-col justify-center items-center py-5 md:pr-5 lg:pr-5 xl:pr-5">
          <UserDetails />
        </div>
        <div className="item2 w-full w-3/4 md:w-3/4 lg:w-3/4 lx:w-3/4 rounded-3xl bg-white drop-shadow-md px-8 py-4">
          <div className="py-0">
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
                  onChange={handleLocationInputChange}
                />
              </div>
              <button
                className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl"
                onClick={handleSaveChanges}
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
