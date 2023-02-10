import React, { Component } from 'react';
import Home from './Home';
import Nav from './Nav';
import Shop from './Shop';
import Login from './Login';
import Signup from './Signup';

import {Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav/>
          
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Login' element={<Login />}/>
            <Route path='/Signup' element={<Signup />}/>
            <Route path='/Shop' element={<Shop />}/>

          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}
