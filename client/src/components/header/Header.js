import axios from 'axios'
import React, { useContext, createContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Context from '../../utils/context';


const Header = () => {
    const id = useContext(Context)
    console.log(id);

    return (
        <div className='header-container'>
            <h1>Logo</h1>
            <div className='header-nav'>
            <h2>{id}</h2>
                <Link to="/logout">Logout</Link>
            </div>
        </div>
    )
}



export default Header