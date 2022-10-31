import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import Header from './header/Header'
import AddPost from './post/AddPost'

const Dashboard = () => {

    const token = localStorage.getItem('token')
    if(!token){
        return <Redirect to="/login" />
    }

    return (
        <>
            <Header/>
            <h1>Dashboard</h1>
            <Link to="/logout">Logout</Link>
            <div className='body'>
                <AddPost />
            </div>
        </>
    )
}

export default Dashboard