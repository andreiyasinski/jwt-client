import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SignUpForm = (props) => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleInputNameChange = (value) => {
    setName(value)
  }

  const handleInputPasswordChange = (value) => {
    setPassword(value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/v1/users',
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
      console.log(myJson)
      if (myJson.status === 201) {
        props.history.push('/login')
      }
    })
    .catch(error => console.log(error.message));
  }

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={name} onChange={(e) => handleInputNameChange(e.target.value)}/>
        <input type="password" value={password} onChange={(e) => handleInputPasswordChange(e.target.value)}/>
        <button>Sign Up</button>
      </form>
      <NavLink to="/login" exact >
        <button>Go to log in</button>
      </NavLink>
    </div>
  )
}

export default SignUpForm;