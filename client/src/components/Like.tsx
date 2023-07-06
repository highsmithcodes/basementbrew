import React, { useEffect, useState } from 'react';
import { HeartIcon } from '@heroicons/react/20/solid';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store/Store';
import { setUserPosts } from '../store/Store';
import { Auth } from 'aws-amplify';
import { dynamoDB } from '../components/dynamoDBConfig';

interface Props {
  post: any;
}

const Like: React.FC<Props> = ({ post }) => {
  const userPosts = useSelector((state: AppState) => state.userPosts);
  const dispatch = useDispatch();
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        setUserId(currentUser.username);
      } catch (error) {
        console.error('Error fetching current user:', error);
      }
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const params = {
          TableName: 'basementbrew_users',
          Key: {
            UserInfo: post.PostDetails,
          },
        };

        const response = await dynamoDB.get(params).promise();
        setUsername(response.Item?.username || '');
      } catch (error) {
        console.error('Error fetching username:', error);
      }
    };

    fetchUsername();
  }, [post.PostDetails]);

  const handleLike = async (post: any) => {
    try {
  
      if (!post.PostDetails) {
        console.error('PostDetails is missing in the post object:', post);
        return;
      }
  
      let likeCount = parseInt(post.Like, 10); // Parse the current like count as an integer
  
      if (isNaN(likeCount)) {
        likeCount = 0; // If the like count is not a valid number, set it to 0
      }
  
      const likedByCurrentUser = likeCount > 0;
  
      if (likedByCurrentUser) {
        // Remove like
        likeCount -= 1; // Decrease like count by 1
      } else {
        // Add like
        likeCount += 1; // Increase like count by 1
      }
  
      // Update the like column in the basementbrew_posts table
      const updateParams = {
        TableName: 'basementbrew_posts',
        Key: {
          PostDetails: post.PostDetails,
        },
        UpdateExpression: 'SET #likeAttr = :likeValue',
        ExpressionAttributeNames: {
          '#likeAttr': 'Like',
        },
        ExpressionAttributeValues: {
          ':likeValue': likeCount,
        },
      };
  
      await dynamoDB.update(updateParams).promise();
  
      // Update the post object with the new like count
      const updatedPost = { ...post, Like: likeCount };
  
      // Dispatch the setUserPosts action with the updated post object
      dispatch(setUserPosts(userPosts.map((p) => (p.PostID === post.PostID ? updatedPost : p))));
    } catch (error) {
      console.error('Error updating like:', error);
    }
  };
  

  const isPostLikedByCurrentUser = post.LikedBy && post.LikedBy.includes(userId);

  return (
    <>
      <div className='flex flex-column content-center'>
        <HeartIcon
          color={isPostLikedByCurrentUser ? '#ff0000' : '#000'}
          className="h-6 w-5 flex-none"
          aria-hidden="true"
          onClick={() => handleLike(post)}
        />
        <span className="ml-2">{post.Like}</span>
      </div>
      <div className='flex flex-column content-center'>
        <p className='text-sm'>By: {username}</p>
      </div>
  </>
  );
};

export default Like;


