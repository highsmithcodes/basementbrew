import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState, setUserPosts } from '../store/Store';
import { Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';
import UserDetails from '../components/UserDetails';
import { dynamoDB } from '../components/dynamoDBConfig';
import Like from '../components/Like';

export function YourBrews() {
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
    <div className="container mx-auto my-16 p-4">
      <div className="flex flex flex-col md:flex-row lg:flex-row xl:flex-row">
        <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 pt-0 flex-col justify-center items-center py-5 md:pr-5 lg:pr-5 xl:pr-5">
          <UserDetails />
        </div>
        <div className="item2 w-full w-3/4 md:w-3/4 lg:w-3/4 lx:w-3/4">
          <div className="py-0">
            <div className="flex flex flex-col md:flex-row lg:flex-row xl:flex-row">
              {userPosts.map((post) => (
                <div
                  key={post.PostID}
                  className="w-full  mx-2 md:w-1/2 lg:w-1/2 xl:w-1/2 rounded-3xl bg-white drop-shadow-md px-8 py-4"
                >
                  <h2 className="text-lg font-semibold">{post.BeerType}</h2>
                  <p>{post.Description}</p>
                  <div>
                    <Like post={post} />
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

export default YourBrews;