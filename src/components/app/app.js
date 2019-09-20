import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignUpForm from '../signUpForm/signUpForm';
import LogInForm from '../logInForm/logInForm';
import MainPage from '../mainPage/mainPage';
import './app.css';

const App = () => {
  
  const loginCheck = () => (
    JSON.parse(localStorage.getItem("auth")) ? JSON.parse(localStorage.getItem("auth")).isLoggedIn : null
  )
  
  
  return (
    <div className="container">
      <Switch>
        <Route path="/signup" render={(props) => <SignUpForm {...props} />} />
        {/* <Route path="/login" component={LogInForm} /> */}
        <Route path="/login" exact render={(props) => (
          loginCheck() ? (
            <Redirect to="/" />
          ) : (
            <LogInForm {...props} />
          )
        )} />
        <Route path="/" exact render={(props) => (
          loginCheck() ? (
            <MainPage {...props} />
          ) : (
            <Redirect to="/login"/>
          )
        )} />
      </Switch>
    </div>
  );
}

export default App;
