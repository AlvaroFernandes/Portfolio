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
      <Navbar />
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
        <Route exact path={process.env.PUBLIC_URL + "/home"} component={Home} />
          <Route exact path={process.env.PUBLIC_URL + "/About"} component={About} />
          <Route exact path={process.env.PUBLIC_URL + "/Portfolio"} component={Portfolio} /> 
          <Route exact path={process.env.PUBLIC_URL + "/Contact"} component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
