import axios from 'axios'
import React, { useContext, createContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const UserContext = createContext();

const Header = (children) => {



    return (
        <div className='header-container'>
            <h1>Logo</h1>
            <div className='header-nav'>
     
                <Link to="/logout">Logout</Link>
            </div>
        </div>
    )
}



export default Header