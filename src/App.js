import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './Component/navbar';
import Home from './Component/home';
import About from './Component/about';
import Portfolio from './Component/portfolio';
import Contact from './Component/contact';

function App() {
  return (
    <Router>
      <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} /> 
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </Router>
  );
}

export default App;
