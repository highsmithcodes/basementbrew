import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { DynamoDB } from 'aws-sdk';
import { Link } from 'react-router-dom';
import UserDetails from '../components/UserDetails';
import { HeartIcon } from '@heroicons/react/20/solid';


export function AllPosts() {
  const [userPosts, setUserPosts] = useState<any[]>([]);
  const [userId, setUserId] = useState<string>('');

  useEffect(() => {
    fetchUserPosts();
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      setUserId(currentUser.username);
    } catch (error) {
      console.error('Error fetching current user:', error);
    }
  };

  const fetchUserPosts = async () => {
    try {
      const dynamoDB = new DynamoDB.DocumentClient({
        region: 'us-east-1',
        accessKeyId: 'AKIA2CNAK7BASZTYEZMA',
        secretAccessKey: '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',
      });

      const params = {
        TableName: 'basementbrew_posts',
      };

      const response = await dynamoDB.scan(params).promise();
      setUserPosts(response.Items || []);
    } catch (error) {
      console.error('Error fetching user posts:', error);
    }
  };

  const handleLike = async (post: any) => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      const userId = currentUser.username;
  
      if (!post.PostID) {
        console.error('PostID is missing in the post object:', post);
        return;
      }
  
      const dynamoDB = new DynamoDB.DocumentClient({
        region: 'us-east-1',
        accessKeyId: 'AKIA2CNAK7BASZTYEZMA',
        secretAccessKey: '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', 
      });
  
      const likedByCurrentUser = post.LikedBy && post.LikedBy.includes(userId);
  
      if (likedByCurrentUser) {
        // Remove like
        const updatedLikedBy = post.LikedBy.filter((id: string) => id !== userId);
        post.LikedBy = updatedLikedBy;
        post.Like -= 1; // Decrease like count by 1
      } else {
        // Add like
        const updatedLikedBy = [...(post.LikedBy || []), userId];
        post.LikedBy = updatedLikedBy;
        post.Like += 1; // Increase like count by 1
      }
  
      // Update the like column in the basementbrew_posts table
      const updateParams = {
        TableName: 'basementbrew_posts',
        Key: {
          PostID: post.PostID,
        },
        UpdateExpression: 'SET #like = :likeValue',
        ExpressionAttributeNames: {
          '#like': 'Like'
        },
        ExpressionAttributeValues: {
          ':likeValue': post.Like
        },
      };
  
      await dynamoDB.update(updateParams).promise();
  
      // Refresh the userPosts state to reflect the updated like status
      setUserPosts((prevPosts) =>
        prevPosts.map((prevPost) => {
          if (prevPost.PostID === post.PostID) {
            return { ...prevPost, Like: post.Like, LikedBy: post.LikedBy };
          }
          return prevPost;
        })
      );
    } catch (error) {
      console.error('Error updating like:', error);
    }
  };


  return (
    
    <div className="container mx-auto my-28">
      <div className="grid-container grid grid-cols-5">
        <div className="item1 col-span-1 flex flex-col justify-center items-center">
          <UserDetails />
        </div>
        <div className="item2 col-span-4">
        <nav aria-label="Tabs">
            <ul className="flex border-b border-gray-100">
              <li className="flex-1 bg-gray-400 hover:bg-black duration-100">
                  <div className="flex items-center justify-center gap-4">
                    <Link className="text-sm font-medium text-white p-4" to="/brews">Your Brews</Link>
                  </div>
              </li>

              <li className="flex-1 bg-black">
                  <div className="flex items-center justify-center gap-4">
                    <Link className="text-sm font-medium text-white p-4" to="/all-posts">All Brews</Link>
                  </div>
              </li>

              <li className="flex-1 bg-gray-400 hover:bg-black duration-100">
                  <div className="flex items-center justify-center gap-4">
                    <Link className="text-sm font-medium text-white p-4" to="/likes">Likes</Link>
                  </div>
              </li>

              <li className="flex-1 bg-gray-400 hover:bg-black duration-100">
                  <div className="flex items-center justify-center gap-4">
                    <Link className="text-sm font-medium text-white p-4" to="/create-post">Create Post</Link>
                  </div>
              </li>
            </ul>
          </nav>
          <div className="py-5">
            <div className="grid grid-cols-2 gap-3">
            {userPosts.map((post) => (
              <div key={post.PostID} className="mb-4 rounded-lg border border-black px-8 py-4">
                <h2 className="text-lg font-semibold">{post.BeerType}</h2>
                <p>{post.Description}</p>
                <div>
                <HeartIcon
                      className={`h-6 w-5 flex-none text-black ${
                        post.LikedBy && post.LikedBy.includes(userId) ? 'text-red-500' : ''
                      }`}
                      aria-hidden="true"
                      onClick={() => handleLike(post)}
                    />
                </div>
                <Link to={`/brews/${post.PostID}`} className="text-blue-600 mt-2 inline-block">
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

export default AllPosts;
