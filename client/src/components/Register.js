import React, { useState } from 'react';

const Register = ( { setAuth } ) => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    name: ''
  });

  const { email, password, name } = inputs;

  const handleChange = (e) => {
    setInputs({...inputs, [e.target.name] : e.target.value})
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password, name };

      const response = await fetch('http://localhost:1000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const parseRes = await response.json();

      localStorage.setItem('token', parseRes.token);

      setAuth(true);
    } catch (err) {
      console.error(err.message);
    }
  }
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={onSubmitForm} className=" border-cyan-500 border-2">
        <input
          type='text'
          name='email'
          value={email}
          placeholder='email'
          onChange={e => handleChange(e)}
        />
        <input
          type='text'
          name='password'
          value={password}
          placeholder='password'
          onChange={e => handleChange(e)}
        />
        <input
          type='text'
          name='name'
          value={name}
          placeholder='name'
          onChange={e => handleChange(e)}
        />
        <button>Submit</button>
      </form>
    </>
  )
}

export default Register;