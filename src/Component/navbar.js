import React from 'react';

function Navbar(){
 return(
  <nav className="navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow">
  <div className="container">
    <a className="navbar-brand" href={process.env.PUBLIC_URL + "/home"}>Alvaro Fernandes</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href={process.env.PUBLIC_URL + "/home"}>Home
                <span className="sr-only">(current)</span>
              </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={process.env.PUBLIC_URL + "/About"}>About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={process.env.PUBLIC_URL + "/Portfolio"}>Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={process.env.PUBLIC_URL + "/Contact"}>Contact</a>
        </li>
      </ul>
    </div>
  </div>
  </nav>
 );
}

export default Navbar;