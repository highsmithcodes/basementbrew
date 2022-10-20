import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const onSubmit = e => {
        e.preventDefault()
        createUser({email, password })
        setEmail('')
        setPassword('')
    }

    const createUser = async (user) => {
        try {
            const res = await axios.post('http://localhost:1000/signup', user)
            console.log('res:', res)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">Sign Up</h3>
            </div>
            <div className="card-body">
                <form onSubmit={ onSubmit }>
                    <div className="mt-2">
                        <input type="email" placeholder="Enter Email" value={ email } onChange={ e => setEmail(e.target.value) } required />
                    </div>
                    <div className="mt-2">
                        <input type="password" placeholder="Enter Password" value={ password } onChange={ e => setPassword(e.target.value) } required />
                    </div>
                    <button type="submit" className="btn btn-primary btn-sm mt-2">SignUp</button>
                </form>
            </div>
            <div className="card-footer">
                <p className="card-text">Already have an account? <Link to="/login">LogIn</Link></p>
            </div>
        </div>
    )
}

export default SignUp