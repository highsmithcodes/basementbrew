import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Nav from './components/Nav';
import Footer from './components/Footer';
// import PrivateRoute from './components/PrivateRoute';

function App() {
  // const isAuthenticated = false; // Replace with your authentication logic

  return (
    <div className="App">
      <Router>
      <div>
        <Nav />
        <Routes>
          <Route  path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;