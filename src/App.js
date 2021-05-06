import React from 'react';
import './App.css';
import Main from './Main';
import Login from './login';
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/main" component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

const Home = () => (
  <div>
    <h1 style={{color: "white", fontWeight
        :"bold", marginTop:"5%"}}>Home page</h1>
    <button className="button1"> <Link to="/login">Login user</Link></button>
  </div>
)

export default App;
