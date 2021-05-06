import React from 'react';
import './App.css';
import Navbar from './navbar';
import Footer from './footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Main() {
  return (
    <div>
      <Navbar />
      <Footer/>
    </div>
  );
}

export default Main;