import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { DynamoDB } from 'aws-sdk';
import { Link } from 'react-router-dom';
import UserDetails from '../components/UserDetails';
import { HeartIcon } from '@heroicons/react/20/solid';
import { dynamoDB } from '../components/dynamoDBConfig'; 


export function AllBrews() {
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
    
    <div className="container mx-auto my-16 p-4">
      <div className="flex flex flex-col md:flex-row lg:flex-row xl:flex-row">
        <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 pt-0 flex-col justify-center items-center py-5 md:pr-5 lg:pr-5 xl:pr-5">
          <UserDetails />
        </div>
        <div className="item2 w-full w-3/4 md:w-3/4 lg:w-3/4 lx:w-3/4">
          <div className="py-0">
            <div className="flex flex flex-col md:flex-row lg:flex-row xl:flex-row">
            {userPosts.map((post) => (
              <div key={post.PostID} className="w-full  mx-2 md:w-1/2 lg:w-1/2 xl:w-1/2 m-0 rounded-3xl bg-white drop-shadow-md px-8 py-4">
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

export default AllBrews;
