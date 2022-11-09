import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import Header from './header/Header'
import AddPost from './post/AddPost'


const Dashboard = () => {
    const [name, setName] = useState("");

  async function getName() {
    try {
      // We didn't use fetch instead we used axios
      // removed await
      const response = axios.get("http://localhost:1000/dashboard");

      // using .then, create a new promise which extracts the data
      const dataPromise = response.then((response) => response.data)
      console.log(dataPromise)
      setName(dataPromise.email);
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