import React, { useState, useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignUpForm from '../signUpForm/signUpForm';
import LogInForm from '../logInForm/logInForm';
import MainPage from '../mainPage/mainPage';
import Users from '../users/users'
import './app.css';

const App = () => {
  
  const [authToken, setAuthToken] = useState('');

  const setToken = (value) => {
    localStorage.setItem("authToken", value);
    setAuthToken(value);
  }

  useEffect(() => {
    setAuthToken(localStorage.getItem("authToken"));
  }, []);

  const LoggedOutRoute = (props) => {
    if (!authToken) {
      return <Route {...props} />
    }
    return <Redirect to='/' />
  }

  const LoggedInRoute = (props) => {
    if (authToken) {
      return <Route {...props} />
    }
    return <Redirect to='/login' />
  }

  return (
    <div className="container">
      <h1>App</h1>
      <Switch>
        <LoggedInRoute path="/" exact render={(props) => <MainPage {...props} setAuthToken={setToken} />} />
        <LoggedInRoute path="/users" render={() => <Users authToken={authToken} />} />       
        <LoggedOutRoute path="/login" exact render={(props) => <LogInForm {...props} setAuthToken={setToken} />} />
        <LoggedOutRoute path="/signup" exact component={SignUpForm} />
      </Switch>
    </div>
  );
}

export default App;
