import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import Header from './header/Header'
import CreatePost from './post/CreatePost'

const Dashboard = () => {

    const token = localStorage.getItem('token')
    if(!token){
        return <Redirect to="/login" />
    }

    return (
        <>
            <Header/>
            <h1>DashBoard</h1>
            <Link to="/logout">Logout</Link>
            <div className='body'>
                <CreatePost />
            </div>
        </>
    )
}

export default Dashboard