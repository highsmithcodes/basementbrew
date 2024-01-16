import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import AWS from 'aws-sdk';
import { SketchPicker } from 'react-color';
import { useNavigate } from 'react-router-dom';



export function CreateBrewForm() {
  const [beerType, setBeerType] = useState('');
  const [abv, setAbv] = useState('');
  const [ibu, setIbu] = useState('');
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const handleSaveChanges = async () => {
    try {
      // Get the current authenticated user
      const currentUser = await Auth.currentAuthenticatedUser();
  
      // Extract the user ID from the current authenticated user
      const userId = currentUser.username;
  
      // Initialize the AWS SDK with the credentials
 
  
      // Create an instance of the DynamoDB DocumentClient
      const dynamoDB = new AWS.DynamoDB.DocumentClient();
  
      // Prepare the new post item
      const postItem = {
        PostID: Date.now().toString(),
        PostDetails: userId,
        BeerType: beerType,
        ABV: abv,
        IBU: ibu,
        Color: color,
        Size: size,
        Description: description,
        Like: 0, // Initialize the Like property with a default value of 0
      };
      
  
      // Save the post to the basementbrew_posts table
      const params = {
        TableName: 'basementbrew_posts',
        Item: postItem,
      };
  
      await dynamoDB.put(params).promise();
      console.log('Post saved successfully');
  
      console.log('User profile updated successfully');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };

  const handleColorChange = (newColor: any) => {
    setColor(newColor.hex);
  };


  return (
    <div className="w-full mx-auto p-4 bg-white shadow rounded-3xl">
      <div className="grid grid-cols-3 gap-3">
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
          <SketchPicker
            color={color}
            onChangeComplete={handleColorChange}
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
        <div className="mb-4">
          <label className="block mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
      </div>
      <button
        onClick={handleSaveChanges}
        className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl"
      >
        Save Changes
      </button>
    </div>
  );
}

export default CreateBrewForm;