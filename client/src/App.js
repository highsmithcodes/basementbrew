import React, { Fragment, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Switch, Navigate, Redirect } from 'react-router-dom'
 import Dashboard from './components/dashboard/Dashboard.js';
 import Login from './components/LogIn.js';
 import Register from './components/Register.js';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

  const isAuth = async () => {
    try {
      // This is where we are, there is no error here
      const response = await fetch('http://localhost:1000/auth/is-verify', {
        method: "GET",
        headers: { token: localStorage.token }
      })
      const parseRes = await response.json();
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
      console.log(localStorage.token)
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    isAuth();
  }, [])
  return (
    <>
      <Router>
        <div className=" bg-gray-700">
          <Switch>
            <Route
              exact
              path="/login"
              element={
                !isAuthenticated ? (
                  <Login setAuth={setAuth} />
                ) : (
                  <Redirect to="/dashboard" />
                )
              }
            />
            {/* So it's recognizing it as !isAuthenticated */}
            <Route
              exact
              path="/register"
              element={
                !isAuthenticated ? (
                  <Register setAuth={setAuth} />
                ) : (
                  <Redirect to="/dashboard" />
                )
              }
            />
            <Route
              exact
              path="/dashboard"
              element={
                isAuthenticated ? (
                  <Dashboard setAuth={setAuth} />
                ) : (
                  <Redirect to="/login"  />
                )
              }
            />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;