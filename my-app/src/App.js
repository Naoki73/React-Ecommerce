import React, { useState } from 'react';
import Home from './Home';
import Nav from './Nav';
import Shop from './Shop';
import Login from './Login';
import Signup from './Signup';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ToDoList from './ToDoList';
import './App.css';

export default function App() {

  const [user, setUser] = useState({});

  const logMeIn = (user) => {
    setUser(user);
  };
  const logMeOut = () => {
    setUser({});
    localStorage.removeItem('user107')
  };

  return (
    <BrowserRouter>
      <div>
        <Nav user={user} logMeOut={logMeOut}/>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Login' element={<Login logMeIn={logMeIn} />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/ToDoList' element={<ToDoList />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

