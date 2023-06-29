//App.js
import { Authenticator } from '@aws-amplify/ui-react';

import { Dashboard } from './pages/Dashboard';
import { RequireAuth } from './RequireAuth';
import { Login } from './pages/Login';
import { CreateBrew } from './pages/CreateBrew';
import { Home } from './pages/Home';
import { Layout } from './components/Layout';
import { UserProfile } from './pages/updateProfile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostDetail from './pages/postDetail';

import './App.css';
import AllBrews from './pages/AllBrews';
import YourPosts from './pages/yourPosts';

function MyRoutes() {
  return (
    <BrowserRouter>
     <div className='bg-gray-200'>
      <Routes>
       
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/create-brew"
            element={
              <RequireAuth>
                <CreateBrew />
              </RequireAuth>
            }
          />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <UserProfile />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/brews" element={<YourPosts />} />
          <Route path="/all-brews" element={<AllBrews />} />
          <Route path="/brews/:postId" element={<PostDetail />} />
        </Route>
    
      </Routes>    
      </div>
    </BrowserRouter>
  );
}

function App() {
  return (
    <Authenticator.Provider>
      <MyRoutes />
    </Authenticator.Provider>
  );
}

export default App;