import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState, setUserPosts } from '../store/Store';
import { Auth } from 'aws-amplify';
import UserDetails from '../components/userdetails';
import { dynamoDB } from '../configs/dynamoDBConfig';

export function PostDetail() {
  const userPosts = useSelector((state: AppState) => state.userPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUserPosts();
  }, []);

  const fetchUserPosts = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      const userId = currentUser.username;

      const params = {
        TableName: 'basementbrew_posts',
        FilterExpression: 'PostDetails = :userId',
        ExpressionAttributeValues: {
          ':userId': userId,
        },
      };

      const response = await dynamoDB.scan(params).promise();
      dispatch(setUserPosts(response.Items || []));
    } catch (error) {
      console.error('Error fetching user posts:', error);
    }
  };

  return (
    <div className="">
      <div className="flex flex flex-col md:flex-row lg:flex-row xl:flex-row">
        <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 pt-0 flex-col justify-center items-center md:pr-5 lg:pr-5 xl:pr-5">
          <UserDetails />
        </div>
        <div className="item2 w-full w-3/4 md:w-3/4 lg:w-3/4 lx:w-3/4">
          <div className="p-20">
            <div className="grid grid-cols-1 gap-1">
              {userPosts.map((post) => (
                <div
                  key={post.PostID}
                  className="w-full  mx-2 md:w-full lg:w-full xl:w-full rounded-3xl bg-white drop-shadow-md px-8 py-4"
                >
                  <h2 className="text-lg font-semibold">Beer type: {post?.BeerType}</h2>
                  <p>Description: {post.Description}</p>
                  <div className="flex items-center mt-2">
                    Color:
                    <div
                      className="w-6 h-6 mr-2 rounded-full ml-2"
                      style={{
                        backgroundColor: post.Color,
                        width: '50px',
                        height: '50px',
                        borderRadius: '0',
                      }}
                    ></div>
                  </div>
                  <p>ABV: {post.ABV}</p>
                  <p>IBU: {post.IBU}</p>
                  <p>Size: {post.Size}</p>
                  <div>
                    {/* <HeartIcon className="h-6 w-5 flex-none text-black" aria-hidden="true" /> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
