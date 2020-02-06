import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header'
import BookContainer from './Components/BookContainer'
import Form from './Components/Form.js'

import Login from './Components/Login.js'
import SignUp from './Components/SignUp.js'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// import books from './books'

const App = () => {
  return (
    <div className="parent">

      <BrowserRouter>

        <Route component={Header} />

        <Switch>
          <Route exact path='/' component={() => {
            if(localStorage.getItem('token')){
              return <BookContainer />
            }else{
              return <Redirect to='/login' />
            }
          }} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />

          <Route>
            <Redirect to='/' />
          </Route>

        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
