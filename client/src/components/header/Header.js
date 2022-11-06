import axios from 'axios'
import React, { useContext, createContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Context from '../../utils/context';


const Header = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')) || JSON.parse(localStorage.getItem('token')));



    const getProfile = async () => {
        try {
          const response = await fetch('http://localhost:1000/dashboard/', {
            method: 'GET',
            headers: { 
                'token': localStorage.token 
            }
          });
    
          const parseRes = await response.json();
    
          console.log('get profile', parseRes)
          setName(parseRes[0].user_name)
        } catch (err) {
          console.log('Dashboard request error');
          console.error(err.message);
        }
      }
    useEffect(() => {
        getProfile();
    })

    return (
        <div className='header-container'>
            <h1>Logo</h1>
            <div className='header-nav'>
            <h2>{name}</h2>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/login">Login</Link>
                <Link to="/logout">Logout</Link>
            </div>
        </div>
    )
}



export default Header