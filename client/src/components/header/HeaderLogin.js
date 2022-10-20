import React from 'react'
import { Link } from 'react-router-dom'

const HeaderLogin = () => {

    return (
        <div className='header-container'>
            <h1>Logo</h1>
            <div className='header-nav'>
                <Link to="/logout">Login</Link>
            </div>
        </div>
    )
}

export default HeaderLogin