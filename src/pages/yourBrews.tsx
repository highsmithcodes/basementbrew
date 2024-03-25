import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState, setUserPosts } from '../store/Store';
import { dynamoDB } from '../configs/dynamoDBConfig';
import DashboardLayout from '../components/dashboardlayout';
import Card, { CardSkeletonLoader } from '../ui/card';

export function YourBrews() {
  const userPosts = useSelector((state: AppState) => state.userPosts);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);


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
