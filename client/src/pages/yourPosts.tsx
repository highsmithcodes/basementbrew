import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { DynamoDB } from 'aws-sdk';
import { Link } from 'react-router-dom';
import UserDetails from '../components/UserDetails';
import { HeartIcon } from '@heroicons/react/20/solid';


export function YourPosts() {
  const [userPosts, setUserPosts] = useState<any[]>([]);

  useEffect(() => {
    fetchUserPosts();
  }, []);
  const fetchUserPosts = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      const userId = currentUser.username;

      const dynamoDB = new DynamoDB.DocumentClient({
        region: 'us-east-1',
        accessKeyId: 'AKIA2CNAK7BASZTYEZMA',
        secretAccessKey: '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', 
      });

      const params = {
        TableName: 'basementbrew_posts',
        FilterExpression: 'PostDetails = :userId',
        ExpressionAttributeValues: {
          ':userId': userId,
        },
      };

      const response = await dynamoDB.scan(params).promise(); // Use scan instead of query
      setUserPosts(response.Items || []);
    } catch (error) {
      console.error('Error fetching user posts:', error);
    }
  };


  return (
    
    <div className="container mx-auto my-16 p-4">
      <div className="flex flex flex-col md:flex-row lg:flex-row xl:flex-row">
        <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 pt-0 flex-col justify-center items-center py-5 md:pr-5 lg:pr-5 xl:pr-5">
          <UserDetails />
        </div>
        <div className="item2 w-full w-3/4 md:w-3/4 lg:w-3/4 lx:w-3/4">
          <div className="py-0">
            <div className="flex flex flex-col md:flex-row lg:flex-row xl:flex-row">
            {userPosts.map((post) => (
              <div key={post.PostID} className="w-full  mx-2 md:w-1/2 lg:w-1/2 xl:w-1/2 rounded-3xl bg-white drop-shadow-md px-8 py-4">
                <h2 className="text-lg font-semibold">{post.BeerType}</h2>
                <p>{post.Description}</p>
                <div>
                  <HeartIcon className="h-6 w-5 flex-none text-black" aria-hidden="true"  />
                </div>
                <Link to={`/brews/${post.PostID}`} className="text-black mt-2 inline-block">
                    Read More
                  </Link>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourPosts;
