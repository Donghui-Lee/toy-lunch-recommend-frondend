import React from 'react';
import './index.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={['/@:username', '/']} component={MainPage} exact />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}
