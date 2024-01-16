import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState, setUserPosts } from '../store/Store';
import { Auth } from 'aws-amplify';
import { dynamoDB } from '../configs/dynamoDBConfig';
import DashboardLayout from '../components/dashboardlayout';
import Card, { CardSkeletonLoader } from '../ui/card';

export function YourBrews() {
  const userPosts = useSelector((state: AppState) => state.userPosts);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserPosts();
  }, []);

  const fetchUserPosts = async () => {
    setLoading(true);
  
    setTimeout(async () => {
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
      } finally {
        setLoading(false);
      }
    }, 500);
  };

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

export default YourBrews;
