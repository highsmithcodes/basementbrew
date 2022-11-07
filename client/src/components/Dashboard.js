import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import Header from './header/Header'
import AddPost from './post/AddPost'


const Dashboard = () => {
    const token = localStorage.getItem('token')
    const [name, setName] = useState('');


    const getProfile = async () => {
        try {
          const response = await fetch('http://localhost:1000/dashboard');
    
          const parseRes = await response.json();
    
          console.log('get profile', parseRes)
          setName(parseRes[0].username)

        } catch (err) {
          console.log('Dashboard request error');
          console.error(err.message);
        }
      }
    useEffect(() => {
        getProfile();
    })

    if(!token){
        return <Redirect to="/login" />
    }

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