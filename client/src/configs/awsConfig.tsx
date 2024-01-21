const awsConfig = {
    aws_project_region: process.env.REACT_APP_PROJECT_REGION,
    aws_cognito_identity_pool_id: process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID,
    aws_cognito_region: process.env.REACT_APP_COGNITO_REGION,
    aws_user_pools_id: process.env.REACT_APP_USER_POOLS_ID,
    aws_user_pools_web_client_id: process.env.REACT_APP_USER_POOLS_WEB_CLIENT_ID,
    aws_access_key_id: process.env.REACT_APP_ACCESS_KEY_ID,
    aws_secret_access_key: process.env.REACT_APP_SECRET_ACCESS_KEY,
};
    
export default awsConfig;