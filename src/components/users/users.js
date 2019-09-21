import React, { useEffect, useState } from 'react';

const Users = ({ authToken }) => {

  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    console.log('test');
    fetch('http://localhost:5000/api/v1/users',
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authorization': `Bearer ${authToken}`
        }
      }
    )
    .then(response => {
      return response.json();
    })
    .then(json => {
      setUsers(json.result)
    })
  }, [authToken]);

  return (
    <div className="container">
      <ul>
        {
          users.map(user => (
            <li key={user._id}>{user.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Users;