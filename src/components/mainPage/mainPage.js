import React from 'react';

const MainPage = (props) => {
  const logOff = () => {
    localStorage.setItem("auth", JSON.stringify({
      isLoggedIn: false
    }));
    props.history.push('/')
  }

  return (
    <div className="container">
      <h1>Hello World!</h1>
      <button onClick={logOff}>LOG OFF</button>
    </div>
  )
}

export default MainPage;