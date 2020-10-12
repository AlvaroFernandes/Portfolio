import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
 return(
  <nav className="navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow">
  <div className="container">
    <Link className="navbar-brand" to={'/home'}>Alvaro Fernandes</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className="nav-link" to={'/home'}>Home
            <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={`/About`}>About</Link>
          {/* <a className="nav-link" href='/About'>About</a> */}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/Portfolio'}>Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/Contact'}>Contact</Link>
        </li>
      </ul>
    </div>
  </div>
  </nav>
 );
}

export default Navbar;