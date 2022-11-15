import React from 'react';
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";


const Header = () => {
    const logout = (e) => {
        e.preventDefault();
        console.log(localStorage.token)
        localStorage.removeItem("token");
        toast.success("You logged out");
    };

    return (
        <div className='header-container'>
            <h1>Logo</h1>
            <div className='header-nav'>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/login">Login</Link>
                <button className="btn btn-primary" onClick={(e) => logout(e)}>Logout</button>
            </div>
        </div>
    )
}



export default Header