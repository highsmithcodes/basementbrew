//App.js
import { Authenticator } from '@aws-amplify/ui-react';

import { Dashboard } from './pages/Dashboard';
import { RequireAuth } from './RequireAuth';
import { Login } from './pages/Login';
import { CreatePost } from './pages/createPost';
import { Home } from './pages/Home';
import { Layout } from './components/Layout';
import { UserProfile } from './pages/updateProfile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostDetail from './pages/postDetail';

import './App.css';
import AllPosts from './pages/allPosts';

function MyRoutes() {
  return (
    <BrowserRouter>
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
            path="/create-post"
            element={
              <RequireAuth>
                <CreatePost />
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
          <Route path="/brews" element={<Dashboard />} />
          <Route path="/all-posts" element={<AllPosts />} />
          <Route path="/brews/:postId" element={<PostDetail />} />
        </Route>
      </Routes>
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