// components/Login.js
import { useEffect } from "react";


import { useNavigate, useLocation } from 'react-router';
import { dynamoDB } from "../configs/dynamoDBConfig";

export function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("All Environment Variables:", process.env.AWS_PROJECT_REGION);
  let from = location.state?.from?.pathname || '/dashboard';


  return (
    <section className="bg-gray-50 hero relative overflow-hidden px-4 py-32 flex lg:h-screen items-center content-center justify-center">
   
    </section>
  );
}
export default Login;