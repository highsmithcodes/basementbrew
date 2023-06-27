import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import AWS,{DynamoDB} from 'aws-sdk';
import awsConfig from '../components/awsConfig';


const dynamoDB = new DynamoDB.DocumentClient({ region: 'us-east-1' });


export function UserProfile() {
  const [username, setUsername] = useState('');

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
      const updateParams = {
        TableName: 'basementbrew_users',
        Key: { UserInfo: userId },
        UpdateExpression: 'SET #username = :username',
        ExpressionAttributeNames: {
          '#username': 'username',
        },
        ExpressionAttributeValues: {
          ':username': username,
        },
      };
  
      await dynamoDB.update(updateParams).promise();
      console.log('User profile updated in DynamoDB');
  
      console.log('User profile updated successfully');
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  return (
    <div>
      <h2>User Profile Form</h2>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <button onClick={handleSaveChanges}>Save Changes</button>
    </div>
  );
}

export default UserProfile;