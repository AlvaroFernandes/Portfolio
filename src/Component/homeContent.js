import React from 'react';
import alvaro from '../assets/img/alvaro.jpeg';

function HomeContent() {
    return(
        <div>
            <img src={alvaro} alt="Alvaro Augusto Fernandes" />
            <h1>Hi, my name is Alvaro Fernandes</h1>
            <p>I'm a Brazilian front-end devoloper living in Sydney for the past 4 years.</p>
        </div>
    )
}

export default HomeContent;