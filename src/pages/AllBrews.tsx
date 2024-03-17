import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../store/Store';
import UserDetails from '../components/userdetails';
import { dynamoDB } from '../configs/dynamoDBConfig';
import { Link } from 'react-router-dom';
import Like from '../components/like';
import DashboardLayout from '../components/dashboardlayout';
import Card, { CardSkeletonLoader } from '../ui/card';

const AllBrews: React.FC = () => {

  const userPosts = useSelector((state: AppState) => state.userPosts);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const fetchUserPosts = async () => {
    setLoading(true);
  
    setTimeout(async () => {
      try {
        const params = {
          TableName: 'basementbrew_posts',
        };
  
        const response = await dynamoDB.scan(params).promise();
        dispatch({ type: 'SET_USER_POSTS', payload: response.Items || [] });
      } catch (error) {
        console.error('Error fetching user posts:', error);
      } finally {
        setLoading(false);
      }
    }, 500);
  };


  useEffect(() => {
    fetchUserPosts();
  }, [dispatch]);

  return (
    <DashboardLayout>
      {loading ? (
        <CardSkeletonLoader />
      ) : (
        <>
        {userPosts.map((post) => (
          <Card key={post.PostID} post={post} />
        ))}
        </>
      )}
    </DashboardLayout>
  );
}

export default AllBrews;