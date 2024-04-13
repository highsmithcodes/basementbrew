//App.js
import { Provider } from 'react-redux';
import store from './store/Store';
import { Dashboard } from './pages/Dashboard';
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
import AuthWrapper from './configs/supabase';

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
                <Dashboard />
            }
          />
          <Route
            path="/create-brew"
            element={
                <CreateBrew />
            }
          />
          <Route
            path="/profile"
            element={
                <UserProfile />
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
      <AuthWrapper>
        <MyRoutes />
      </AuthWrapper>
    </Provider>
  );
}

export default App;