import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import Header from './header/Header'
import AddPost from './post/AddPost'


const Dashboard = () => {
  const [userData, setUserData] = useState('');
  const [name, setName] = useState("");

  async function getName() {
    try {
      // We didn't use fetch instead we used axios
      // removed await
      const response = axios.get("http://localhost:1000/dashboard/",{
        headers: { token: localStorage.token },
      })
      .then((response) => setUserData(response.data))

      // console.log(dataPromise)
      // // setName(dataPromise);
      // setUserData(dataPromise);
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  }

  // maybe the problem is that the username isn't being stored anywhere
  // therefore /dshboard will not retrieve anything
  useEffect(() => {
    getName();
  }, []);
    return (
        <>
            <Header/>
            <h1>Dashboard</h1>
            <h2>Hello {userData.email}</h2>
            
            <div className='body'>
                <AddPost />
            </div>
        </>
    )
}

export default Dashboard