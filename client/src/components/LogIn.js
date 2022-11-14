import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Login = ( { setAuth }) => {
  const [inputs , setInputs] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputs;

  const handleChange = (e) => {
    setInputs({...inputs, [e.target.name] : e.target.value})
  }

  const onSubmitForm =  async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };

      const response = await fetch('http://localhost:1000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      const parseRes = await response.json();

      localStorage.setItem('token', parseRes.token);
      localStorage.setItem('id', parseRes.id);

      setAuth(true);
    } catch (err) {
      console.log('error at login')
      console.error(err.message);
    }
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={onSubmitForm}>
        <input type="text" name="email" placeholder='email' text="email" onChange={(e) => handleChange(e)} value={email} />
        <input type="text" name="password" placeholder='password' text="password" onChange={(e) => handleChange(e)} value={password} />
        <button>test</button>
      </form>
      <Link to='/register'>Register</Link>
    </>
  )
}

export default Login;