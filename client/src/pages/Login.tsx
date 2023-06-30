// components/Login.js
import { useEffect } from "react";

import { Authenticator, useAuthenticator, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { useNavigate, useLocation } from 'react-router';

export function Login() {
  const { route } = useAuthenticator((context) => [context.route]);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || '/';
  useEffect(() => {
    if (route === 'authenticated') {
      navigate(from, { replace: true });
    }
  }, [route, navigate, from]);
  return (
    <View className="auth-wrapper">
      <div className="my-8">
      <Authenticator></Authenticator>
      <div className="p-5">
        <div className="text-sm">Test User Credentials:</div>
        <ul>
          <li>Username: ezrahighsmith@gmail.com</li>
          <li>Password: test1234</li>
        </ul>
      </div>
      </div>
    </View>
  );
}
export default Login;