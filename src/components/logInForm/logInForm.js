import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const LogInForm = (props) => {
  
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/v1/login',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        password
      })
    }
  )
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
    if (myJson.status === 200) {
      props.setAuthToken(myJson.token);
      props.history.push('/');
    }
  });
  }

  return (
    <div className="container">
      <h1>Log In</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button>Log in</button>
      </form>
      <NavLink to="/signup" exact >
        <button>Go to sign up</button>
      </NavLink>
    </div>
  )
}

export default LogInForm;