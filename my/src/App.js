import React, { Component } from 'react';
import Home from '/components/Home';
import Login from '/components/Login';
import Register from './components/Register'
import './App.css';
import { Route } from 'react-router-dom';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header navBrand ={"E-comerce"}/>
        <div>
          <Route exact path="/" Component = {Home}/>
          <Route path ="/login" Component ={Login}/>
          <Route path ="/register" Component ={Register}/>
        </div>
      </div>
    );
  }
}

export default App;
