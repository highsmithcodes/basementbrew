import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import Header from './header/Header'
import AddPost from './post/AddPost'


const Dashboard = () => {
    const [name, setName] = useState("");

  async function getName() {
    try {
      const response = await fetch("http://localhost:1000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token, "Content-Type": "application/json" },
        // body:JSON.stringify(body)
      });

      const parseRes = await response.json();

      setName(parseRes.user_name);
    } catch (err) {
      console.error(err.message);
    }
  }


  useEffect(() => {
    getName();
  }, []);
    return (
        <>
            <Header/>
            <h1>Dashboard</h1>
            <h2>Hello {name}</h2>
            <div className='body'>
                <AddPost />
            </div>
        </>
    )
}

export default Dashboard