import React, { useState, createContext, useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Header from './header/Header'
import AddPost from './post/AddPost'
import Context from '../utils/context'


const Dashboard = () => {
    const value = useContext(Context)
    const token = localStorage.getItem('token')

    if(!token){
        return <Redirect to="/login" />
    }

    return (
        <>
            <Header/>
            <h1>Dashboard</h1>
            {value}
            <div className='body'>
                <AddPost />
            </div>
        </>
    )
}

export default Dashboard