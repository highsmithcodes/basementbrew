//App.js
import { Authenticator } from '@aws-amplify/ui-react';
import { Provider } from 'react-redux';
import store from './store/Store';
import { Dashboard } from './pages/Dashboard';
import { RequireAuth } from './RequireAuth';
import { Login } from './pages/Login';
import { CreateBrew } from './pages/CreateBrew';
import { Home } from './pages/Home';
import { Layout } from './components/layout';
import { UserProfile } from './pages/updateProfile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostDetail from './pages/postDetail';
import './App.css';
import AllBrews from './pages/AllBrews';
import YourBrews from './pages/yourBrews';
import LikedByUser from './pages/LikedByUser';

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
          <Route path="/brews" element={<YourBrews />} />
          <Route path="/all-brews" element={<AllBrews />} />
          <Route path="/brews/:postId" element={<PostDetail />} />
          <Route path="/liked-brews" element={<LikedByUser />} />
        </Route>
    
      </Routes>    
      </div>
    </BrowserRouter>
  );
}

function App() {
  return (
    <Provider store={store}> 
      <Authenticator.Provider>
        <MyRoutes />
      </Authenticator.Provider>
    </Provider>
  );
}

export default App;