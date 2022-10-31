import React from 'react'
import { Link } from 'react-router-dom'
// import Context from './utils/context';


const Header = () => {
    return (
        <div className='header-container'>
            <h1>Logo</h1>
            <div className='header-nav'>
                <div></div>
                <Link to="/logout">Logout</Link>
            </div>
        </div>
    )
}

export default Header