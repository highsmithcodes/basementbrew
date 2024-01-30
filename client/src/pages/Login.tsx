// components/Login.js
import { useEffect } from "react";

import { Authenticator, useAuthenticator, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { useNavigate, useLocation } from 'react-router';
import { dynamoDB } from "../configs/dynamoDBConfig";
import { Auth, Hub } from "aws-amplify";

export function Login() {
  const { route } = useAuthenticator((context) => [context.route]);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("All Environment Variables:", process.env.AWS_PROJECT_REGION);
  let from = location.state?.from?.pathname || '/dashboard';

  const handleSignup = async () => {
    try {
      console.log('handleSignupTriggered');
      const currentUser = await Auth.currentAuthenticatedUser();
      console.log('handleSignupTriggeredCurrentUser', currentUser);
      await dynamoDB.put({
        TableName: 'basementbrew_users',
        Item: {
          UserInfo: currentUser.attributes.sub,
          email: currentUser.attributes.email,
        },
      }).promise();
    } catch (error) {
      console.log('Error signing up', error);
    }
  };

  useEffect(() => {
    if (route === 'authenticated') {
      navigate(from, { replace: true });
      handleSignup();
    }
  }, [route, navigate, from]);

  return (
    <section className="bg-gray-50 hero relative overflow-hidden px-4 py-32 flex lg:h-screen items-center content-center justify-center">
    <View className="auth-wrapper">
      <div className="my-8">
      <Authenticator></Authenticator>

      </div>
    </View>
    </section>
  );
}
export default Login;