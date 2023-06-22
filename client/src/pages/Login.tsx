import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react';
import CustomLoginForm from '../components/Form';


const Login: React.FC = () => {
  return (
    <div>
      <h2>Login</h2>
      <AmplifyAuthenticator>
        <AmplifySignIn slot="sign-in" formFields={[]}>
          <CustomLoginForm />
        </AmplifySignIn>
      </AmplifyAuthenticator>
    </div>
  );
};

export default Login;
