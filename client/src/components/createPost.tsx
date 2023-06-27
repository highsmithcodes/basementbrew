import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import AWS from 'aws-sdk';

const dynamoDB = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

export function CreatePostForm() {
  const [beerType, setBeerType] = useState('');
  const [abv, setAbv] = useState('');
  const [ibu, setIbu] = useState('');
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

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
  
      // Prepare the new post item
      const postItem = {
        PostID: Date.now().toString(), // Generate a unique ID for the post
        UserID: userId,
        BeerType: beerType,
        ABV: abv,
        IBU: ibu,
        Color: color,
        Size: size,
      };
  
      // Save the post to the basementbrew_posts table
      const params = {
        TableName: 'basementbrew_posts',
        Item: postItem,
      };
  
      await dynamoDB.put(params).promise();
      console.log('Post saved successfully');
  
      console.log('User profile updated successfully');
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">User Profile Form</h2>
      <div className="mb-4">
        <label className="block mb-2">Beer Type</label>
        <input
          type="text"
          value={beerType}
          onChange={(e) => setBeerType(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">ABV</label>
        <input
          type="number"
          value={abv}
          onChange={(e) => setAbv(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">IBU</label>
        <input
          type="number"
          value={ibu}
          onChange={(e) => setIbu(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Color</label>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Size</label>
        <input
          type="text"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
      </div>
      <button
        onClick={handleSaveChanges}
        className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Save Changes
      </button>
    </div>
  );
}

export default CreatePostForm;