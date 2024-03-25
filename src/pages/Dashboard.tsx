import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserDetails from '../components/userdetails';
import { dynamoDB } from '../configs/dynamoDBConfig';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../store/Store';
import { setUserPosts } from '../store/Store';
import Like from '../components/like';
import DashboardLayout from '../components/dashboardlayout';

export function Dashboard() {
  const userPosts = useSelector((state: AppState) => state.userPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUserPosts();
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    try {

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
      dispatch(setUserPosts(response.Items || []));
    } catch (error) {
      console.error('Error fetching user posts:', error);
    }
  };


  return (
    <DashboardLayout>
      {userPosts.map((post) => (
        <div
          key={post.PostID}
          className="w-full  mx-2 md:w-1/2 lg:w-1/2 xl:w-1/2 rounded-lg bg-white drop-shadow-md px-8 py-4"
        >
          <h2 className="text-lg font-semibold">{post?.BeerType}</h2>
          <p>{post.Description}</p>
          <div>
            <Like post={post} />
          </div>
          <Link to={`/brews/${post.PostID}`} className="text-black mt-2 inline-block">
            Read More
          </Link>
        </div>
      ))}
  </DashboardLayout>
  );
}

export default Dashboard;
