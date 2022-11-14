import React, { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import CreateBlog from './blogs/CreateBlog.js';
import ListBlogs from './blogs/ListBlogs.js';

const Dashboard = ( { setAuth }) => {
  const [name , setName] = useState('');
  const [allBlogs, setAllBlogs] = useState([]);
  const [blogsChange, setBlogsChange] = useState(false);

  const getProfile = async () => {
    try {
      const response = await fetch('http://localhost:5000/dashboard/', {
        method: 'GET',
        headers: { 'token': localStorage.token }
      });

      const parseRes = await response.json();

      console.log('get profile', parseRes)
      setAllBlogs(parseRes[1])
      setName(parseRes[0].user_name)
    } catch (err) {
      console.log('Dashboard request error');
      console.error(err.message);
    }
  }

  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    setBlogsChange(false);
    getProfile();
  }, [blogsChange]);

  return (
    <div>
      <div>
        <h1 className="mt-5">Dashboard</h1>
        <h2>Welcome {name}</h2>
        <button onClick={(e) => logout(e)} className="btn btn-primary">
          Logout
        </button>
      </div>
      <div>
        <CreateBlog setBlogsChange={setBlogsChange} />
        <ListBlogs allBlogs={allBlogs} setBlogsChange={setBlogsChange} />
      </div>
    </div>
  )
}

export default Dashboard;