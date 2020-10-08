import React from 'react';
import Photo from '../assets/img/alvaro.jpeg';

function Navbar(){
 return(
   <nav className="navbar navbar-dark bg-dark">
       <a className='nav-brand' href='#'>
           <img src={Photo} width='30' height='30' className="d-inline-block align-top" />
       </a>
   </nav>
 );
}

export default Navbar;