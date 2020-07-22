import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/@:username', '/']} component={MainPage} />
        <Route exact path={'/login'} component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}
